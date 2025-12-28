# Disable AI Search

A Chrome extension that automatically hides Google's AI Overview results by adding `-ai` to your search queries.

## Features

- Automatically adds `-ai` parameter to Google searches
- Toggleable on/off via extension options
- Works on all Google search result pages
- Enabled by default

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension folder
5. The extension is now active

## Usage

The extension works automatically once installed. When you perform a Google search, it will automatically add `-ai` to your query, which tells Google to exclude AI Overview results.

### Settings

- Right-click the extension icon and select "Options"
- Or go to `chrome://extensions/` → "Disable AI Search" → "Options"
- Toggle the "Hide AI Overview results" checkbox to enable/disable

## How it Works

The extension monitors Google search URLs and automatically appends `-ai` to the search query parameter if it's not already present, then redirects to the updated URL.

## Limitations

- Only works on `google.com` and `www.google.com`
- Must search from google.com directly or from Google search result pages

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main functionality script
- `options.html` - Settings page
- `options.js` - Settings page logic
