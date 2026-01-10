# Disable AI Search

A Chrome extension that lets you hide Google's AI Overview results by applying a selected search mode to Google searches.

## Features

- Select a mode: `None`, `-ai`, or `udm=14 (Web)`
- Applies the selected mode only on the default "All" results tab
- Skips URLs that already include a `udm` parameter
- Works on all Google search result pages
- Enabled by default

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension folder
5. The extension is now active

## Usage

The extension works automatically once installed. When you perform a Google search on the default "All" tab, it will apply the selected mode:

- `None` does not change the search URL
- `-ai` appends `-ai` to your query
- `udm=14 (Web)` adds `udm=14` to the URL

### Settings

- Right-click the extension icon and select "Options"
- Or go to `chrome://extensions/` → "Disable AI Search" → "Options"
- Choose a mode from the dropdown

## How it Works

The extension monitors Google search URLs and applies the selected mode on the default "All" tab. Depending on the choice, it either appends `-ai` to the query or sets `udm=14`, then redirects to the updated URL. It skips URLs that already include `udm`, and does not run on non-"All" tabs (like Images, Shopping, News) that use `tbm` parameters.

## Limitations

- Only works on `google.com` and `www.google.com`
- Must search from google.com directly or from Google search result pages
- Does not run on non-"All" tabs (Images, Shopping, News, etc.)
- Does not change URLs that already include `udm`

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main functionality script
- `options.html` - Settings page
- `options.js` - Settings page logic
