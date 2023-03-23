class Question {
    constructor(text,options,answer,points,category){
        this.text = text;
        this.options = options;
        this.answer = answer;
        this.points = points;
        this.category = category;
    }
}


const questions = [
    new Question("Glavni grad Srbije je ?", ["Zagreb","Sarajevo","Beograd","Nis"], "Beograd",5, "geografija"),
    new Question("Glavni grad Srbije2 je ?", ["Zagreb","Sarajevo","Beograd2","Nis"], "Beograd2",5, "geografija"),
    new Question("Glavni grad Srbije3 je ?", ["Zagreb","Sarajevo","Beograd3","Nis"], "Beograd3",5, "geografija"),
    new Question("Glavni grad Srbije4 je ?", ["Zagreb","Sarajevo","Beograd4","Nis"], "Beograd4",5, "geografija"),
    new Question("Glavni grad Srbije5 je ?", ["Zagreb","Sarajevo","Beograd5","Nis"], "Beograd5",5, "geografija")
]