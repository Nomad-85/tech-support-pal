export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image?: string;
  views: number;
}

// Sample articles data
export const articles: Article[] = [
  {
    slug: "how-to-connect-to-wifi",
    title: "How to Connect to WiFi Networks",
    summary: "A step-by-step guide to connecting your device to WiFi networks securely and efficiently.",
    content: `
      <h2>Connecting to WiFi Networks</h2>
      <p>WiFi connections allow your devices to access the internet without using cellular data. Here's how to connect:</p>
      <h3>On a Smartphone (iPhone or Android)</h3>
      <ol>
        <li>Open the Settings app on your device</li>
        <li>Tap on "Wi-Fi" or "Connections" > "Wi-Fi"</li>
        <li>Make sure Wi-Fi is turned on (toggle switch)</li>
        <li>Wait for the list of available networks to appear</li>
        <li>Tap on the network name you want to join</li>
        <li>Enter the password when prompted</li>
        <li>Tap "Connect" or "Join"</li>
      </ol>
      <h3>On a Windows Computer</h3>
      <ol>
        <li>Click on the WiFi icon in the bottom right corner of your screen</li>
        <li>Select the network you want to connect to</li>
        <li>Check "Connect automatically" if you want to connect to this network in the future</li>
        <li>Click "Connect"</li>
        <li>Enter the network password</li>
        <li>Click "Next" or "Connect"</li>
      </ol>
      <h3>Tips for Secure WiFi Connections</h3>
      <ul>
        <li>Only connect to networks you trust</li>
        <li>Use a VPN when connecting to public WiFi</li>
        <li>Make sure the network name is correct to avoid fake networks</li>
        <li>Forget networks you no longer use</li>
      </ul>
    `,
    date: "2025-06-01",
    image: "/images/wifi-connection.jpg",
    views: 245
  },
  {
    slug: "setting-up-email-on-your-phone",
    title: "Setting Up Email on Your Smartphone",
    summary: "Learn how to configure your email accounts on your smartphone for easy access on the go.",
    content: `
      <h2>Setting Up Email on Your Smartphone</h2>
      <p>Having email on your phone keeps you connected wherever you go. Here's how to set it up:</p>
      <h3>On iPhone</h3>
      <ol>
        <li>Open the Settings app</li>
        <li>Scroll down and tap "Mail"</li>
        <li>Tap "Accounts"</li>
        <li>Tap "Add Account"</li>
        <li>Select your email provider (Gmail, Outlook, Yahoo, etc.)</li>
        <li>Enter your email address and password</li>
        <li>Tap "Next" and wait for verification</li>
        <li>Choose which features you want to use (Mail, Contacts, Calendar)</li>
        <li>Tap "Save"</li>
      </ol>
      <h3>On Android</h3>
      <ol>
        <li>Open the Gmail app</li>
        <li>Tap on your profile picture in the top right</li>
        <li>Tap "Add another account"</li>
        <li>Select your email provider</li>
        <li>Enter your email address and tap "Next"</li>
        <li>Enter your password</li>
        <li>Follow the on-screen instructions to complete setup</li>
      </ol>
      <h3>Troubleshooting Tips</h3>
      <ul>
        <li>Make sure you have the correct password</li>
        <li>Check your internet connection</li>
        <li>For Gmail, you might need to allow "less secure apps" in your Google account settings</li>
        <li>For work email, you might need specific settings from your IT department</li>
      </ul>
    `,
    date: "2025-05-15",
    image: "/images/email-setup.jpg",
    views: 189
  },
  {
    slug: "backing-up-your-photos",
    title: "How to Back Up Your Photos",
    summary: "Protect your precious memories by learning how to back up your photos to the cloud or external storage.",
    content: `
      <h2>Backing Up Your Photos</h2>
      <p>Photos capture our most precious memories. Here's how to make sure they're safely backed up:</p>
      <h3>Using Cloud Services</h3>
      <h4>Google Photos</h4>
      <ol>
        <li>Download the Google Photos app</li>
        <li>Sign in with your Google account</li>
        <li>Tap on your profile picture > Photos settings</li>
        <li>Tap "Back up & sync"</li>
        <li>Toggle "Back up & sync" to ON</li>
      </ol>
      <h4>iCloud (for iPhone)</h4>
      <ol>
        <li>Go to Settings > [your name] > iCloud</li>
        <li>Tap "Photos"</li>
        <li>Turn on "iCloud Photos"</li>
      </ol>
      <h3>Using External Storage</h3>
      <ol>
        <li>Connect your external hard drive to your computer</li>
        <li>Connect your phone to your computer with a USB cable</li>
        <li>On your computer, open the folder containing your phone's photos</li>
        <li>Select all photos you want to back up</li>
        <li>Copy and paste them to a folder on your external drive</li>
      </ol>
      <h3>Best Practices</h3>
      <ul>
        <li>Use at least two different backup methods</li>
        <li>Check your backups regularly to ensure they're working</li>
        <li>Consider organizing photos by year and month</li>
        <li>Remember that free cloud storage is often limited - consider paid options for large collections</li>
      </ul>
    `,
    date: "2025-04-22",
    image: "/images/photo-backup.jpg",
    views: 312
  }
];
