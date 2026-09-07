document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[2],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[3],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[4],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function QualitativeSceneEvent(idx) {
            const dics = document.querySelectorAll('.b-dics')[0];
            const sections = dics.getElementsByClassName('b-dics__section');
            const scenes = ['002_box', '114', '754', '015'];
            const imageNames = [
                'deformgs.png',
                'pvg.png',
                'streetgs.png',
                'omnire.png',
                'ours.png',
                'gt.png'
            ];

            // The first qualitative-results panel contains six comparison images.
            for (let i = 0; i < imageNames.length; i++) {
                const image = sections[i]
                    .getElementsByClassName('b-dics__image-container')[0]
                    .getElementsByClassName('b-dics__image')[0];
                image.src = `img/waymo/comp/${scenes[idx]}/${imageNames[i]}`;
            }

            const scene_list = document.getElementById("replica-rgbd").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function AblationSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 5
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'img/tum/rgbd/fr1/';
                        break;
                    case 1:
                        image.src = 'img/tum/rgbd/fr2/';
                        break;
                    case 2:
                        image.src = 'img/tum/rgbd/fr3/';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'gsicp.png';
                        break;
                    case 1:
                        image.src = image.src + 'splatam.png';
                        break;
                    case 2:
                        image.src = image.src + 'rtgslam.png';
                        break;
                    case 3:
                        image.src = image.src + 'ours.jpg';
                        break;
                    case 4:
                        image.src = image.src + 'gt.jpg';
                        break;

                }
            }

            let scene_list = document.getElementById("tum-rgbd").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }


        function replicamonoSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[2]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 5
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'img/replica/mono/room0/';
                        break;
                    case 1:
                        image.src = 'img/replica/mono/room1/';
                        break;
                    case 2:
                        image.src = 'img/replica/mono/room2/';
                        break;
                    case 3:
                        image.src = 'img/replica/mono/office0/';
                        break;
                    case 4:
                        image.src = 'img/replica/mono/office1/';
                        break;
                    case 5:
                        image.src = 'img/replica/mono/office2/';
                        break;
                    case 6:
                        image.src = 'img/replica/mono/office3/';
                        break;
                    case 7:
                        image.src = 'img/replica/mono/office4/';
                        break;    
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'monogs.png';
                        break;
                    case 1:
                        image.src = image.src + 'photoslam.jpg';
                        break;
                    case 2:
                        image.src = image.src + 'photoslam30k.jpg';
                        break;
                    case 3:
                        image.src = image.src + 'ours.jpg';
                        break;
                    case 4:
                        image.src = image.src + 'gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("replica-mono").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function tummonoSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[3]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 5
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'img/tum/mono/fr1/';
                        break;
                    case 1:
                        image.src = 'img/tum/mono/fr2/';
                        break;
                    case 2:
                        image.src = 'img/tum/mono/fr3/';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'monogs.png';
                        break;
                    case 1:
                        image.src = image.src + 'photoslam.png';
                        break;
                    case 2:
                        image.src = image.src + 'photoslam30k.png';
                        break;
                    case 3:
                        image.src = image.src + 'ours.jpg';
                        break;
                    case 4:
                        image.src = image.src + 'gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("tum-mono").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function eurocstereoSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[4]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 5
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'img/euroc/stereo/mh01/';
                        break;
                    case 1:
                        image.src = 'img/euroc/stereo/mh02/';
                        break;
                    case 2:
                        image.src = 'img/euroc/stereo/v101/';
                        break; 
                    case 3:
                        image.src = 'img/euroc/stereo/v201/';
                        break; 
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'monogs.png';
                        break;
                    case 1:
                        image.src = image.src + 'photoslam.png';
                        break;
                    case 2:
                        image.src = image.src + 'photoslam30k.png';
                        break;
                    case 3:
                        image.src = image.src + 'ours.jpg';
                        break;
                    case 4:
                        image.src = image.src + 'gt.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("euroc-stereo").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }
