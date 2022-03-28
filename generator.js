var dummyText = [
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit gravida. Viverra nibh cras pulvinar mattis nunc.", 
   "Sit amet risus nullam eget felis eget nunc. Congue eu consequat ac felis donec et odio pellentesque. Sem nulla pharetra diam sit amet. Iaculis at erat pellentesque adipiscing commodo elit. Tristique magna sit amet purus",
   "Gravida quis blandit turpis cursus. Amet tellus cras adipiscing enim. Blandit volutpat maecenas volutpat blandit aliquam. Sit amet consectetur adipiscing elit.",
   "Tortor posuere ac ut consequat. In fermentum et sollicitudin ac orci phasellus egestas tellus. Diam donec adipiscing tristique risus. Vel eros donec ac odio tempor orci dapibus. Convallis aenean et tortor at risus.",
   "Porta lorem mollis aliquam ut porttitor leo. Tortor posuere ac ut consequat. Nunc congue nisi vitae suscipit tellus mauris. Dignissim enim sit amet venenatis urna cursus eget. Luctus accumsan tortor posuere ac ut consequat.",
   "Tempor orci eu lobortis elementum nibh tellus molestie nunc. Quam quisque id diam vel. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
   "Sed enim ut sem viverra. Pharetra massa massa ultricies mi quis. Enim diam vulputate ut pharetra sit amet aliquam id. Sit amet purus gravida quis blandit turpis cursus in. Senectus et netus et malesuada.",
   "Eget mi proin sed libero enim sed faucibus turpis. Gravida cum sociis natoque penatibus et magnis dis. Vestibulum rhoncus est pellentesque elit. Odio tempor orci dapibus ultrices in iaculis nunc.",
   "Proin nibh nisl condimentum id venenatis a condimentum. Sit amet porttitor eget dolor morbi non arcu risus quis. Tristique sollicitudin nibh sit amet commodo nulla.",
   "Ipsum dolor sit amet consectetur adipiscing. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Semper quis lectus nulla at volutpat diam ut venenatis. Ut eu sem integer vitae justo eget magna fermentum.",
   "Sit amet justo donec enim diam. Tristique risus nec feugiat in fermentum. Purus sit amet volutpat consequat mauris nunc. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.",
   "Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Orci ac auctor augue mauris augue neque gravida in. Sit amet purus gravida quis blandit. Etiam dignissim diam quis enim lobortis.",
   "Risus pretium quam vulputate dignissim suspendisse in est ante in. Sed felis eget velit aliquet sagittis id consectetur purus ut. In pellentesque massa placerat duis. Et sollicitudin ac orci phasellus.",
   "Fames ac turpis egestas sed. Adipiscing elit ut aliquam purus sit. Mattis rhoncus urna neque viverra justo nec. Odio euismod lacinia at quis risus sed vulputate. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.",
   "Ac ut consequat semper viverra nam libero. Augue ut lectus arcu bibendum at varius vel pharetra. Amet venenatis urna cursus eget nunc. Vitae ultricies leo integer malesuada. Elit eget gravida cum sociis natoque penatibus et. A pellentesque sit amet porttitor. Mattis rhoncus urna neque viverra.",
   "Ut morbi tincidunt augue interdum. Porttitor massa id neque aliquam vestibulum morbi blandit. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum dolor sit. Arcu dictum varius duis at consectetur lorem donec.",
   "Facilisis volutpat est velit egestas dui id ornare arcu. Nisl nunc mi ipsum faucibus vitae. Amet commodo nulla facilisi nullam. In pellentesque massa placerat duis. Netus et malesuada fames ac turpis egestas sed. Tristique et egestas quis ipsum suspendisse ultrices.",
   "Adipiscing elit ut aliquam purus sit amet. Lacus vestibulum sed arcu non. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Gravida cum sociis natoque penatibus et magnis dis. Eget mi proin sed libero enim. Interdum consectetur libero id faucibus nisl tincidunt."
];

function generateFunction(){
    choose();
}

function clearDisplay(){
   document.getElementById("output").empty();
}

function choose(){
    var num = document.getElementById("num").value;
    var type = document.getElementById("type").value;
    if(type === "p"){
        generateParagraph(num);
    }else{
        generateWords(num);
    }
}

//Generate Paragraph
function generateParagraph(n){
    for(var i = 0; i <= (n-1); i++){
        var para = "";
        for(var j = 0; j <= 4; j++){
            var randompara = Math.floor(Math.random() * dummyText.length);
            para = para + dummyText[randompara];
        }
        para = para;
        document.getElementById("output").append(para);
    }
}

//Generate Words
function generateWords(n){
    var words = "";
    for(var i = 0; i <= (n-1); i++){
        var randomwords = Math.floor(Math.random() * dummyText.length);
        var splitsent = dummyText[randomwords].split("");
        var b = Math.floor(Math.random() * splitsent.length);
        words = words + splitsent[b] + "";
    }
    words = words;
    document.getElementById("output").append(words);
}