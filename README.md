# Sesam_chat-widget
Frontend sesam

## V85 branch / Production deployment ✅

This repository includes a ready-to-use configuration for V85 in the `v85` branch. To use the V85 theme in production, include the v85 config before loading the widget script (example via jsDelivr):

```html
<script src="https://cdn.jsdelivr.net/gh/rdek-automation/RK-AUTO_chat-widget.v1@v85/v85-chat-config.js"></script>
<script src="https://cdn.jsdelivr.net/gh/rdek-automation/RK-AUTO_chat-widget.v1@v85/chat-widget.js"></script>
```

The v85 config sets:
- Branding name: `Velkommen til V85`
- Logo: `https://v85.dk/wp-content/uploads/2025/01/v85-header-logo.png`
- Primary color: `#e10600` (V85 red)
- Webhook URL: `https://rk-automation.app.n8n.cloud/webhook/0efc804b-2816-40a7-989d-ecadfe6d7cdc/chat`

No widget logic is changed beyond exposing a header text color variable to ensure correct contrast on branded headers.
