import React from 'react';
import "./footerForm.scss"

export default function FooterForm() {
    return (
      <div>
        <form action="/">
          <input type="text" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    );
}
