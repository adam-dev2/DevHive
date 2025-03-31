import webpush from "web-push";

// Load VAPID keys
webpush.setVapidDetails(
  "mailto:your-email@example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

const sendWebNotification = async (task) => {
  const payload = JSON.stringify({
    title: "Task Reminder",
    body: `🔔 ${task.title} is due!`,
  });

  // Replace this with actual user subscription details from frontend
  const userSubscription = {
    endpoint: "USER_SUBSCRIPTION_ENDPOINT",
    keys: {
      auth: "USER_AUTH_KEY",
      p256dh: "USER_P256DH_KEY",
    },
  };

  try {
    await webpush.sendNotification(userSubscription, payload);
    console.log("Web push notification sent!");
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
};

export default sendWebNotification;
