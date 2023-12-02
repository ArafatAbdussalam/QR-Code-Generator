show certain input fields on click if only the button data shows that it is authenticated

onClick Button, check if the value is authenticated

if it is authenticated, show input field with wifi and socials value
if it is not authenticated, show input field with false value

to check if authenticated, check if it is login

{!isLoggedIn && (
    return where isAuthenticated says false
)}

{isLoggedIn && (
    return where isAuthenticated says true
)}