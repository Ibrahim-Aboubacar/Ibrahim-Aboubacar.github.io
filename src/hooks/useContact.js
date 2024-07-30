export default function useContact() {
    const whatsappPrefiledMessage = `Hello *Mr Ibrahim A. Ibrahim*,

I have reviewed your portfolio and I am impressed. I would like to discuss a potential collaboration with you. Please let me know your availability for a meeting.

Best regards,
*[Your Name]*
*[Your Company/Organization]*`;

    const socials = {
        linkedInLink:
            "https://www.linkedin.com/in/ibrahim-ciss%C3%A9-861041231/",
        twitterLink: "https://x.com/Aboubacar_6c",
        facebookLink: "https://www.facebook.com/cissoko.cisse",
        githubLink: "https://github.com/Ibrahim-Aboubacar",
        whatsappLink:
            "https://wa.me/+233265361406?text=" +
            encodeURI(whatsappPrefiledMessage),
    };
    return socials;
}
