// V85 chat widget configuration (include before loading chat-widget.js)
window.ChatWidgetConfig = {
    webhook: {
        url: "https://rk-automation.app.n8n.cloud/webhook/0efc804b-2816-40a7-989d-ecadfe6d7cdc/chat",
        route: ""
    },
    branding: {
        logo: "https://v85.dk/wp-content/uploads/2025/01/v85-header-logo.png",
        name: "Velkommen til V85",
        introMessage: "Hej, jeg er Andy! Jeg kan hjælpe dig med at finde den rette bil, forklare vores leasingmuligheder eller guide dig videre til tilbud, værksted og skadesanmeldelse. Stil dit spørgsmål, så hjælper jeg dig videre!",

        poweredBy: { text: "V85", link: "https://gustavwester.github.io/rkautomation-website/" }
    },
    style: {
        // V85: primary red theme
        primaryColor: "#e10600",
        secondaryColor: "#b20000",
        position: "right",
        backgroundColor: "#ffffff",
        fontColor: "#111827",
        headerTextColor: "#ffffff"
    }
};
