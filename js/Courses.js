class Course {
    constructor(name, author, description) {
        this.name = name;
        this.author = author;
        this.description = description;
        // this.library = new Array();
    }

    // private
    _template(title, author, description) {
        return `<div>
            <header><h2>${title}</h2></header>
            <p><strong>Opis:</strong> ${description}</p>
            <footer>Autor: ${author}</footer>
            </div>`;
    }

    //! Before use U should create array in index.js for this date
    addToLibrary(library) {
        this.library = library;

        const cours = [];
        cours.push(this.name);
        cours.push(this.author);
        cours.push(this.description);
        this.library.push(cours);
    }

    getCourse(library, id) {
        this.library = library;
        this.id = id;

        console.log(`Kurs ${this.library[this.id][0]}`);

        const template = `<p>Kurs: ${this.library[this.id][0]}</p>`;

        return template;
    }

    getAllCourses(library) {
        this.library = library;

        for (let i = 0; i < library.length; i++) {
            return this._template(title, author, description);
        }
    }
}

export { Course };
