import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.push.app',
  appName: 'push-notification-app',
  webDir: 'www',
  server: {
    androidScheme: "https" // Allows HTTP requests
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
