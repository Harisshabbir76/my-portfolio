# Specific Vercel Deployment Steps for This Portfolio

Follow these specific steps to deploy your portfolio on Vercel:

## 1. Prepare for Deployment

Before you deploy, you need to make a small change to your project for it to work on Vercel:

1. Make sure you are using the simplest vercel.json configuration:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

## 2. Deploy to Vercel

1. **Create a GitHub Repository**:
   - Push your code to a new GitHub repository

2. **Setup on Vercel**:
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "Add New..." and select "Project"
   - Import your GitHub repository
   - Configure the following settings:

   **Basic Settings**:
   - Framework Preset: Select "Vite"
   - Root Directory: Don't change (leave blank)

   **Build Settings**:
   - Build Command: `cd client && vite build`
   - Output Directory: `dist`

   **Environment Variables**:
   - No need to add any for the frontend part

3. **Deploy**:
   - Click "Deploy"

## 3. Fix 404 Issues (If Needed)

If you still get 404 errors after deploying:

1. Go to your Vercel project settings
2. Navigate to "Settings" → "General"
3. Scroll down to "Build & Development Settings"
4. Update settings:
   - Framework Preset: Other
   - Build Command: `cd client && vite build`
   - Output Directory: `dist`
5. Click "Save" and redeploy

## 4. Alternate Method (If the Above Doesn't Work)

Try this alternative approach:

1. **Local Build**:
   ```
   cd client
   npm run build
   ```

2. **Manual Upload**:
   - Take the generated `dist` folder
   - Go to Vercel dashboard → "Add New..." → "Project"
   - Instead of importing from Git, look for the option to upload directly
   - Upload the `dist` folder

## Need More Help?

If you're still having issues, check these common problems:

1. **Path Issues**:
   - Make sure your Resume.pdf and other assets are properly referenced

2. **Route Problems**:
   - The SPA routing should work with the Vercel rewrites configuration

3. **Build Output**:
   - Ensure Vercel is looking for the output in the correct directory
