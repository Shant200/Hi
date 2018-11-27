let music = {
Artist:"Erykah Badu",
category:"Soul",
FavoriteSong:"on & on",
rank:2

}
let music2 = {
Artist2:"Jhene Aiko",
category2: "neo-soul",
FavoriteSong2:"The worst",
rank2:4
}
set category (Icategory) {
    if(typeof Icategory != 2) {
        console.log('not a category');
    }
    else{
        this.category = Icategory;
        }

get rank () {
            return this.rank;
            }   }
        let music2_value = Object.values(music2);

        let music2_key  = Object.keys(music2);
        console.log(Object.values(music2));
        music2_value.forEach(item => {
            console.log(item);
            
        });
        music2_key.forEach(item =>{
            console.log(item);
        })
        