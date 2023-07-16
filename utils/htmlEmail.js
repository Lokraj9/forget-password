export function html({url,text}){
    return `
    <div style="max-width: 700px; margin: auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center;text-transform: capitalize;color: teal;">welcome to the email</h2>
        <p>Congratulations you're almost set to start using nextauth
            just click the button below to validate your email address
        </p>
        <a href=${url} style="background: crimson;text-decoration: none;color: white;padding: 10px 20px;margin: 10px 0;display: inline-block;">${text}</a>
        <div>${url}</div>
    </div>
    `
}