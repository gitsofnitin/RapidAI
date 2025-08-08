import { clerkClient } from "@clerk/express";

// Middleware to check userId and hasPremiumPlan
export const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth();

    // Updated plan key to match Clerk settings
    const hasPremiumPlan = await has({ plan: 'pro_plans' });

    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPlan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
      req.plan = 'free';
      return next();
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0
        }
      });
      req.free_usage = 0;
    }

    req.plan = hasPremiumPlan ? 'pro_plans' : 'free';
    next();

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
