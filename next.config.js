/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true
    },
    images:{
        domains:["lh3.googleusercontent.com","images.pexels.com"]
    },
    images: {
        remotePatterns: [
            { hostname: 'res.cloudinary.com', protocol: 'https', port: '' }
        ]
    },
}

module.exports = nextConfig
