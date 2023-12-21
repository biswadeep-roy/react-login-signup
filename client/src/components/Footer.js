import React from "react";
import "./Footer.css";

const Footer = () => {
  const socialProfiles = {
    github: "https://github.com/biswadeep-roy/",
    facebook:
      "https://www.facebook.com/profile.php?id=61553915821870&mibextid=ZbWKwL/",
    linkedin: "https://www.linkedin.com/in/biswadeep-roy-022804219/",
    twitter: "https://twitter.com/biswadeep___roy/",
    instagram: "https://www.instagram.com/_biebs__/",
    portfolio: "https://biswadeep-roy-portfolio.vercel.app/",
  };

  return (
    <footer>
      <div className="social-icons">
        {Object.entries(socialProfiles).map(([platform, link]) => (
          <a
            key={platform}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform === "github" && (
              <img src="/github.png" alt="GitHub logo" />
            )}
            {platform === "facebook" && (
              <img src="/facebook.png" alt="Facebook logo" />
            )}
            {platform === "linkedin" && (
              <img src="/linkd.png" alt="LinkedIn logo" />
            )}
            {platform === "twitter" && (
              <img src="/twitter.png" alt="Twitter logo" />
            )}
            {platform === "instagram" && (
              <img src="/imsta.png" alt="Instagram logo" />
            )}
            {platform === "portfolio" && (
              <img src="/human.jpg" alt="Instagram logo" />
            )}
          </a>
        ))}
      </div>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
