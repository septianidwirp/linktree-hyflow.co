const buttons = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/hyflow.co/",
      class: "instagram",
    },
    {
      name: "G-mail",
      link: "mailto:hyflow.co@gmail.com?Subject=Mau%20tanya",
      class: "g-mail",
    },
    {
      name: "Tiktok",
      link: "https://www.tiktok.com/@hyflow.co?_t=8j4yvYNJo5n&_r=1",
      class: "tiktok",
    },
    {
        name: "WhatsApp",
        link: "https://api.whatsapp.com/send?phone=6285784737894&text=Halo%20Hyflow",
        class: "whatsapp",
      },
  ];
  
  // memanggil button container
  const btnContainer = document.getElementById("button-container");
  
  // iterasi/dapatkan masing-masing data button dari array buttons
  buttons.forEach((button) => {
    // membuat element button
    const btn = document.createElement("button");
  
    // mengisi text dari button
    btn.innerText = button.name;
  
    // menambahkan class btn ke dalam button
    btn.classList.add("btn");
  
    // menambahkan class untuk merubah warnanya
    btn.classList.add(button.class);
  
    // tambahkan click menuju link
    btn.addEventListener("click", () => window.open(button.link, "_blank"));
  
    // masukkan button ke dalam button container
    btnContainer.append(btn);
  });
  