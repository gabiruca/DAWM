use proyecto3_base;
create table receta(
	idReceta int AUTO_INCREMENT,
	nombreReceta varchar(300),
	tiempoPreparacion varchar(50),
	paisOrigen varchar(50),
    categoria varchar(30),
    dificultad int,
    calificacion double,
    descripcion varchar(1500),
    fechaSubida date,
    primary key (idReceta)
);
    
create table ingrediente(
	idIng int AUTO_INCREMENT,
    idReceta int,
    nombreIngrediente varchar(100),
    cantidad varchar(50),
    primary key(idIng),
    foreign key(idReceta) references receta(idReceta)
);

create table paso(
	idPaso int AUTO_INCREMENT,
    idReceta int,
	paso varchar(8),
    especificacion varchar(5000),
    primary key(idPaso),
    foreign key(idReceta) references receta(idReceta)
);

create table categorias(
	nombreCat varchar(200)
);
create table paises(
	nombrePaises varchar(200)
);
create table dificultades(
	nombreDif varchar(200)
);

delete from proyecto3_base.receta where idReceta=3;
select * from proyecto3_base.paises;