export function socials(page){
    let socialsParent = document.getElementById(page);
    let ul = document.createElement("ul");
        ul.innerHTML = `<li><h3>Find me on:</h3></li>
            <li><a href="https://www.facebook.com/SRMusicman92/">Facebook<span class="line-up"><img src="/Assets/Images/1024px-Facebook_Logo_(2019).png" height="40" width="40" alt="Facebook Logo"></span></a></li>
            <li><a href="/https://www.instagram.com/scottramsaymusic/">Instagram<span class="line-up"><img src="/Assets/Images/IG.png" height="40" width="40" alt="IG Logo"></span></a></li>
            <li><a href="https://www.youtube.com/channel/UCp1oMKsRWgW_4mrxBVHU6fQ">YouTube<span class="line-up"><img src="/Assets/Images/YouTube.png" height="40" width="40" alt="YouTube Logo"></span></a></li>
            <li><a href="https://open.spotify.com/artist/5amvcNRKuyKg7gff03D0qr?si=SshMOWaPQIKNWuun5N6k3g">Spotify<span class="line-up"><img src="/Assets/Images/file-spotify-logo-png-4.png" height="40" width="40" alt="Spotify Logo"></span></a></li>
            <li><a href="https://www.tiktok.com/@scottramsaymusic">TikTok<span class="line-up"><img id="TikTok" src="/Assets/Images/TikTok-Transparent.png" height="55" width="55" alt="TikTok Logo"></span></a></li>
            <li><a href = mailto:srmusic2020@hotmail.com >Email Me<span class="line-up"><img src="/Assets/Images/email-309491_960_720.png" height="40" width="40" alt="Email Logo"></span></a></li>
            `;
    
            socialsParent.appendChild(ul);
}


