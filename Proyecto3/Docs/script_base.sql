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
#Receta 1
insert into receta values(1,"Encebollado","52 minutos","Ecuador","Mariscos",1,4.5,"El encebollado es un plato típico de Ecuador, se suele comer acompañado de chifles, pan, arroz o canguil, dependiendo de la región.");
insert into ingrediente values(1,1,"albacora o atún (pescado)","1 kg");
insert into ingrediente values(2,1,"yuca","1 kg");
insert into ingrediente values(3,1,"aceite","2 cdas");
insert into ingrediente values(4,1,"tomates","2");
insert into ingrediente values(5,1,"cebolla morada","1");
insert into ingrediente values(6,1,"pimentón molido","1 cdta");
insert into ingrediente values(7,1,"comino molido","2 cdtas");
insert into ingrediente values(8,1,"comino molido","2 cdtas");
insert into ingrediente values(9,1,"cilantro","5 ramas");
insert into ingrediente values(10,1,"agua","8 tazas");
insert into paso values (1,1,"Paso 1","Picar tomates y cebolla y refreírlos en una olla. Luego, agregar comino y sal al gusto.");
insert into paso values (2,1,"Paso 2","Ya hecho el refrito, añadir el agua y el cilantro en la misma olla.");
insert into paso values(3,1,"Paso 3","Cuando el agua esté hirviendo, agregar el pescado y cocinar a fuego medio durante 15 minutos. Pasado este tiempo, retirar el pescado del caldo.");
insert into paso values(4,1,"Paso 4","Pelar y cortar la yuca, cocinarla con sal al gusto hasta que esté blanda.");
insert into paso values(5,1,"Paso 5","Mezclar el caldo con la yuca y con el pescado, ajustar la sal de ser necesario. Servir el encebollado en el plato.");

#Receta 2
insert into receta values(2,"Pastel de arroz con coco caramelizado","45 minutos","Tailandia","Postres",1,5.0,"Este postre data del periodo Sukhothai. Estos pasteles de arroz no poseen relleno, pero están generosamente cubiertos de coco rallado caramelizado.");
insert into ingrediente values (11,2,"harina de arroz glutinoso","200 g");
insert into ingrediente (idReceta, nombreIngrediente, cantidad) values (2,"agua","170 ml");
insert into ingrediente (idReceta, nombreIngrediente, cantidad) values (2,"coco rallado","150 g");
insert into ingrediente (idReceta, nombreIngrediente, cantidad) values (2,"azúcar de palma","270 g");
insert into paso (idReceta, paso, especificacion) values (2,"Paso 1","Agregar agua a la harina de arroz glutinoso, conforme a como se necesite. Luego, amasar hasta que la masa sea maleable. Si la masa está muy seca, agregue agua. Si la masa está muy húmeda, agregue harina.");
insert into paso (idReceta, paso, especificacion) values (2,"Paso 2","Moldear la masa en forma de cubos de media pulgada de diámetro (aproximadamente). Presionar ligeramente la masa hasta que tome una forma plana.");
insert into paso (idReceta, paso, especificacion) values (2,"Paso 3","Hervir agua y cocinar los pasteles de arroz hasta que floten. Luego, cocinar durante 30 segundos más para asegurarse de que la masa está bien cocida.");
insert into paso (idReceta, paso, especificacion) values (2,"Paso 4","Agregar 70 ml de agua y azúcar de palma en una cacerola de latón. Cuando la mezcla hierva y el azúcar se haya disuelto, agregue el coco rallado.");
insert into paso (idReceta, paso, especificacion) values (2,"Paso 5","Mezclar las tortas de arroz cocinadas en la salsa de coco caramelizado. Retirar la cacerola del fuego y servir.");

#Receta 3
insert into receta values(3,"Horchata de coco","2 horas 30 minutos","México","Bebidas",1,4.5);