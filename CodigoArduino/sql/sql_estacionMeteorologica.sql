create database EstacionMeteorologico;
use EstacionMeteorologico;
create table weather_measurements(
id_weather int auto_increment primary key,
temperature decimal(10,2),
pressure decimal(10,2),
altitude decimal(10,2),
air_quality decimal(10,2),
date_time datetime
);
delimiter //
create procedure sp_StoreMeteorologicalData(
	in Temperature decimal, in Pressure decimal, Altitude decimal, in Air_quality decimal)
	begin
		Insert into weather_measurements (temperature,pressure,altitude,air_quality,date_time) 
        values (Temperature,Pressure,Altitude,Air_quality,now());

	end //
delimiter ;

call sp_StoreMeteorologicalData(40,40,40,40);
select * from estacionmeteorologico.weather_measurements;
create view get_RealTimeData as
select * from weather_measurements order by  date_time desc limit 1 ;

-- este metodo te dice todos los datos por mes
create view get_DataByMonth as 
select * from weather_measurements where month(date_time) = month(now());

 -- este procedimiento borrar los datos del mes pasado
 delimiter //
 create procedure ps_deleteHistory()
 begin
	 if (select day(now())) = 1 then
		delete from weather_measurements where month(date_time) = month(now())-1;
	end if;
 end //
 delimiter ;


