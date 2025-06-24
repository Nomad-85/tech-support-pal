export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;

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

    views: 312
  },
  {
    slug: "top-10-tech-tips-for-seniors",
    title: "Top 10 Tech Tips for Seniors",
    summary: "Essential technology tips to help seniors stay safe, organized, and confident using their devices.",
    content: `
      <h2>Top 10 Tech Tips for Seniors</h2>

      <ol>
        <li><strong>Use Your Browser's Saved Passwords:</strong> Modern browsers can securely remember your usernames and passwords, so you don't have to. Look for the option to save passwords when you log in to websites.</li>
        <li><strong>Keep a Physical Password Notebook:</strong> Write down important passwords in a dedicated notebook and store it in a safe place. This is helpful if you ever forget a password or need to access your accounts on a new device.</li>
        <li><strong>Use Google to Troubleshoot:</strong> If you encounter a tech problem, try searching for your issue on Google. Add your device type and a brief description of the problem to get relevant solutions.</li>
        <li><strong>Install Software Updates:</strong> Regularly update your devices and apps to keep them secure and running smoothly.</li>
        <li><strong>Beware of Scams:</strong> Never share personal information with strangers online or over the phone. Be cautious of emails or messages asking for sensitive details.</li>
        <li><strong>Back Up Important Data:</strong> Use cloud services or external drives to back up your photos, documents, and contacts.</li>
        <li><strong>Use Large Text and Display Settings:</strong> Adjust your device’s display settings to make text larger and easier to read.</li>
        <li><strong>Set Up Emergency Contacts:</strong> Add emergency contacts to your phone for quick access if needed.</li>
        <li><strong>Explore Accessibility Features:</strong> Many devices offer features like voice commands, magnifiers, and screen readers to make technology easier to use.</li>
        <li><strong>Ask for Help:</strong> Don’t hesitate to reach out to friends, family, or tech support if you need assistance. There are also many community resources and classes for seniors.</li>
      </ol>

      <h3>Bonus Tip</h3>

      <p>Take your time and explore new technology at your own pace. Practice makes perfect!</p>
    `,
    date: "2025-06-24",
    views: 0
  },
  {
    slug: "edit-home-screen-iphone-android",
    title: "How to Edit the Home Screen on iPhone and Android",
    summary: "Learn how to move apps and organize your home screen on iPhone and Android devices.",
    content: `
      <h2>How to Edit the Home Screen on iPhone and Android</h2>

      <h3>On iPhone</h3>

      <ol>
        <li>Touch and hold any app icon on your home screen until all the apps start to jiggle.</li>
        <li>Drag the app to a new location or onto another app to create a folder.</li>
        <li>To remove an app from a folder, open the folder and drag the app out.</li>
        <li>Tap the “Done” button (usually in the top right) or press the Home button to finish.</li>
      </ol>

      <h3>On Android</h3>

      <ol>
        <li>Touch and hold the app icon you want to move.</li>
        <li>Drag the app to your desired location or onto another app to create a folder.</li>
        <li>To rename a folder, tap on it and enter a new name.</li>
        <li>To remove an app from a folder, open the folder and drag the app out.</li>
        <li>Some Android phones may have slightly different steps, but the basics are similar.</li>
      </ol>

      <h3>Tips</h3>

      <ul>
        <li>Organize your most-used apps on the first page for easy access.</li>
        <li>Group similar apps (like games or utilities) into folders to keep your screen tidy.</li>
        <li>Remove unused apps to declutter your home screen.</li>
      </ul>
    `,
    date: "2025-06-24",
    views: 0
  },
  {
    slug: "tips-for-using-photos-app-iphone-android",
    title: "Tips for Using the Photos App on iPhone and Android",
    summary: "Discover how to organize, find, and share your photos easily on both iPhone and Android devices.",
    content: `
      <h2>Tips for Using the Photos App on iPhone and Android</h2>

      <h3>Organizing Your Photos</h3>

      <ul>
        <li>Create albums to group related photos together (e.g., vacations, family events).</li>
        <li>On iPhone, tap “Albums” > “+” to add a new album. On Android, use the “Albums” or “Folders” tab.</li>
        <li>Delete unwanted photos regularly to free up space.</li>
      </ul>

      <h3>Finding Photos Quickly</h3>

      <ul>
        <li>Use the search feature to find photos by date, location, or even objects and people (if enabled).</li>
        <li>Mark favorite photos with a heart or star for quick access later.</li>
      </ul>

      <h3>Sharing Photos</h3>

      <ul>
        <li>Select one or more photos and tap the share icon to send them via text, email, or social media.</li>
        <li>On iPhone, you can create shared albums to share with friends and family.</li>
        <li>On Android, use Google Photos to create shared albums or links.</li>
      </ul>

      <h3>Backing Up Your Photos</h3>

      <ul>
        <li>Enable iCloud Photos (iPhone) or Google Photos backup (Android) to automatically save your photos to the cloud.</li>
        <li>Check your backup settings regularly to ensure your photos are safe.</li>
      </ul>

      <h3>Editing Photos</h3>

      <ul>
        <li>Use built-in editing tools to crop, adjust lighting, or apply filters to your photos.</li>
        <li>Experiment with different edits—your original photo is usually saved, so you can always revert back.</li>
      </ul>
    `,
    date: "2025-06-24",
    views: 0
  }
];
