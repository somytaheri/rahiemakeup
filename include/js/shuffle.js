
if (document.documentElement.clientWidth >768){
    var photoSrc = $('.imgModal').map(function () {
            return this.src;

        }).toArray(),
        photoId = $('.imgModal').map(function () {
            return this.id;
        }).toArray(),
        photoIndex = photoSrc.length,
        arrayme = $('ul').find(".imgModal");

    function shuffle() {
        var currentIndex = photoIndex, temporaryidValue,temporarysrcValue, randomIndex ;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryidValue = photoId[currentIndex];
            photoId[currentIndex] = photoId[randomIndex];
            photoId[randomIndex] = temporaryidValue;


            temporarysrcValue = photoSrc[currentIndex];
            photoSrc[currentIndex] = photoSrc[randomIndex];
            photoSrc[randomIndex] = temporarysrcValue;

        }

        return photoId,photoSrc;
    };


    setInterval(function() {
        shuffle();
        for (var i = 0; i <= photoIndex; i++) {
            //$(arrayme[i]).fadeOut(2000).attr( "src", photoSrc[i]).fadeIn("1000");

            $(arrayme[i]).attr("src", photoSrc[i]);
            $(arrayme[i]).attr("id", photoId[i]);


            //$(this).fadeOut("fast").attr("src", src).fadeIn("fast");
        };

    },5000)


};