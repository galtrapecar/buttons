const present_overlay =         document.querySelector(".present_overlay"),
              present_wrapper =         document.querySelector(".present_wrapper"),
              present_body =            document.querySelector(".present_body"),
              present_lid =             document.querySelector(".present_lid"),
              present_lid_top =         document.querySelector(".present_lid_top"),
              present_button_stripe =   document.querySelector(".button_stripe"),
              present_button_text =     document.querySelector(".present_button_text");

        const present_faces =           document.querySelectorAll(".body"),
              present_lid_faces =       document.querySelectorAll(".lid"),
              present_stripes =         document.querySelectorAll(".stripe");

window.onload = init();

        function init() {

            present_overlay.addEventListener("mouseover", () => {

                present_wrapper.classList.remove("unshorten");
                present_wrapper.classList.add("shorten");
                present_button_text.style.opacity = '0';

                setTimeout(() => {

                    present_wrapper.style.backgroundColor = 'rgba(0,0,0,0)';
                    present_button_stripe.style.opacity = '0';
            
                    present_stripes.forEach(stripe => {
                        stripe.style.opacity = '1';
                    });

                    present_body.style.opacity = '1';

                }, 200);

                setTimeout(() => {

                    present_wrapper.classList.remove("unperspective");
                    present_wrapper.classList.add("perspective");

                }, 200);

                setTimeout(() => {

                    present_lid_top.style.background = '#f1f1f1';

                    let i = 0;
                    present_faces.forEach(face => {
                        if (i % 2 === 0) {
                           face.style.background = '#DFDBDC'; 
                        } else {
                            face.style.background = '#E6ECEE';
                        }
                        i++;
                    });

                    i = 0;
                    present_lid_faces.forEach(face => {
                        if (i % 2 === 0) {
                           face.style.background = '#DFDBDC'; 
                        } else {
                            face.style.background = '#E6ECEE';
                        }
                        i++;
                    });

                    present_body.classList.remove("unrotate");
                    present_body.classList.add("rotate");

                }, 200);

                setTimeout(() => {

                    let i = 0;

                    present_faces.forEach(face => {
                        if (i % 2 === 0) {
                           face.style.background = 'linear-gradient(0deg, #DFDBDC 77%, rgb(99, 99, 99) 100%)'; 
                        } else {
                            face.style.background = 'linear-gradient(0deg, #E6ECEE 77%, rgb(99, 99, 99) 100%)';
                        }
                        i++;
                    });

                }, 700);

            });

            present_overlay.addEventListener("mouseout", () => {

                let i = 0;
                present_faces.forEach(face => {
                        if (i % 2 === 0) {
                           face.style.background = '#dedede'; 
                        } else {
                            face.style.background = '#DFDBDC';
                        }
                        i++;
                });

                i = 0;
                    present_lid_faces.forEach(face => {
                        if (i % 2 === 0) {
                           face.style.background = '#E6ECEE'; 
                        } else {
                            face.style.background = '#E2E2E2';
                        }
                        i++;
                    });

                setTimeout(() => {

                    present_body.classList.remove("rotate");
                    present_body.classList.add("unrotate");

                }, 10);

                setTimeout(() => {

                    present_wrapper.classList.remove("perspective");
                    present_wrapper.classList.add("unperspective");

                }, 300);    

                setTimeout(() => {

                    present_wrapper.style.backgroundColor = 'white';
                    present_body.style.opacity = '1';

                }, 500);

                setTimeout(() => {

                    present_button_stripe.style.opacity = '1';

                    present_wrapper.classList.remove("shorten");
                    present_wrapper.classList.add("unshorten");

                }, 600);

                setTimeout(() => {

                    present_lid_top.style.background = 'white';

                    present_faces.forEach(face => {  
                        face.style.background = 'white'; 
                    });

                    present_lid_faces.forEach(face => {  
                        face.style.background = 'white'; 
                    });

                    present_stripes.forEach(stripe => {
                        stripe.style.opacity = '0';
                    });

                }, 550);

                setTimeout(() => {

                    present_button_text.style.opacity = '1';

                }, 700);
               

            });

        }