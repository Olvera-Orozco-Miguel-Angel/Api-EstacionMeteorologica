create database EstacionMeteorologico;
select * from weather_measurements;
use EstacionMeteorologico;
create table rain(
id int auto_increment primary key ,
lm2 float,
tds float, 
date_time datetime
);
Select date_time from rain;
drop table rain;
drop table weather_measurements;
create table weather_measurements(

	id_weather int auto_increment primary key,
	temperature decimal(10,2),
	pressure decimal(10,2),
	altitude decimal(10,2),
	pm1_0 decimal(10,2),
	pm2_5 decimal(10,2),
	pm10 decimal(10,2),
	ozone decimal(10,2),
	air_quality decimal(10,2),
	uv decimal(10,2),
	windSpeed decimal(10,2),
	windDirection varchar(15), 
	date_time datetime

);
drop  procedure sp_StoreMeteorologicalData;


delimiter //

create procedure sp_StoreMeteorologicalData(
    in Temperature float, 
    in Pressure float, 
    in Altitude float, 
    in Pm1_0 float, 
    in Pm2_5 float,
    in Pm10 float,
    in Ozone float,
    in Air_quality float,
    in Uv float,
    in WindSpeed float,
    in WindDirection varchar(15)
)
begin
    insert into weather_measurements(
        temperature, pressure, altitude,
        pm1_0, pm2_5, pm10,
        ozone, air_quality, uv,
        windSpeed, windDirection, date_time
    ) 
    values (
        Temperature, Pressure, Altitude,
        Pm1_0, Pm2_5, Pm10,
        Ozone, Air_quality, Uv,
        WindSpeed, WindDirection, now()
        );
end //

delimiter ;

CALL sp_StoreMeteorologicalData(
    25.5,   -- Temperature
    1013.2, -- Pressure
    500,    -- Altitude
    5.6,    -- Pm1_0
    10.3,   -- Pm2_5
    15.8,   -- Pm10
    0.035,  -- Ozone
    80,     -- Air_quality
    7.2,    -- Uv
    15.5,   -- WindSpeed
    'N'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    28.8,   -- Temperature
    1012.5, -- Pressure
    600,    -- Altitude
    8.2,    -- Pm1_0
    12.7,   -- Pm2_5
    18.4,   -- Pm10
    0.042,  -- Ozone
    75,     -- Air_quality
    8.9,    -- Uv
    18.2,   -- WindSpeed
    'SW'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    27.3,   -- Temperature
    1014.8, -- Pressure
    550,    -- Altitude
    6.1,    -- Pm1_0
    11.5,   -- Pm2_5
    16.2,   -- Pm10
    0.038,  -- Ozone
    78,     -- Air_quality
    7.8,    -- Uv
    16.9,   -- WindSpeed
    'NE'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    30.2,   -- Temperature
    1011.9, -- Pressure
    650,    -- Altitude
    9.5,    -- Pm1_0
    13.9,   -- Pm2_5
    19.7,   -- Pm10
    0.046,  -- Ozone
    72,     -- Air_quality
    9.4,    -- Uv
    20.6,   -- WindSpeed
    'SE'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    26.8,   -- Temperature
    1015.6, -- Pressure
    600,    -- Altitude
    5.9,    -- Pm1_0
    10.8,   -- Pm2_5
    15.3,   -- Pm10
    0.036,  -- Ozone
    79,     -- Air_quality
    8.1,    -- Uv
    17.4,   -- WindSpeed
    'E'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    29.5,   -- Temperature
    1013.9, -- Pressure
    700,    -- Altitude
    7.8,    -- Pm1_0
    12.3,   -- Pm2_5
    17.8,   -- Pm10
    0.041,  -- Ozone
    76,     -- Air_quality
    8.7,    -- Uv
    19.8,   -- WindSpeed
    'W'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    25.1,   -- Temperature
    1016.2, -- Pressure
    550,    -- Altitude
    6.5,    -- Pm1_0
    11.9,   -- Pm2_5
    16.7,   -- Pm10
    0.037,  -- Ozone
    77,     -- Air_quality
    7.5,    -- Uv
    16.3,   -- WindSpeed
    'S'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    27.7,   -- Temperature
    1014.5, -- Pressure
    600,    -- Altitude
    8.3,    -- Pm1_0
    13.1,   -- Pm2_5
    18.9,   -- Pm10
    0.043,  -- Ozone
    73,     -- Air_quality
    9.2,    -- Uv
    21.1,   -- WindSpeed
    'NW'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    31.0,   -- Temperature
    1011.3, -- Pressure
    750,    -- Altitude
    10.2,   -- Pm1_0
    14.5,   -- Pm2_5
    20.5,   -- Pm10
    0.048,  -- Ozone
    70,     -- Air_quality
    9.9,    -- Uv
    23.0,   -- WindSpeed
    'NNE'   -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    25.0,   -- Temperature
    1015.0, -- Pressure
    500,    -- Altitude
    5.0,    -- Pm1_0
    10.0,   -- Pm2_5
    15.0,   -- Pm10
    0.030,  -- Ozone
    85,     -- Air_quality
    6.0,    -- Uv
    12.0,   -- WindSpeed
    'N'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    28.0,   -- Temperature
    1014.0, -- Pressure
    600,    -- Altitude
    6.0,    -- Pm1_0
    11.0,   -- Pm2_5
    16.0,   -- Pm10
    0.032,  -- Ozone
    80,     -- Air_quality
    7.0,    -- Uv
    13.0,   -- WindSpeed
    'NE'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    27.5,   -- Temperature
    1013.5, -- Pressure
    550,    -- Altitude
    5.5,    -- Pm1_0
    10.5,   -- Pm2_5
    15.5,   -- Pm10
    0.031,  -- Ozone
    82,     -- Air_quality
    6.5,    -- Uv
    12.5,   -- WindSpeed
    'E'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    30.0,   -- Temperature
    1012.0, -- Pressure
    650,    -- Altitude
    6.5,    -- Pm1_0
    11.5,   -- Pm2_5
    16.5,   -- Pm10
    0.033,  -- Ozone
    78,     -- Air_quality
    7.5,    -- Uv
    14.0,   -- WindSpeed
    'SE'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    26.0,   -- Temperature
    1011.0, -- Pressure
    700,    -- Altitude
    7.0,    -- Pm1_0
    12.0,   -- Pm2_5
    17.0,   -- Pm10
    0.034,  -- Ozone
    75,     -- Air_quality
    8.0,    -- Uv
    15.0,   -- WindSpeed
    'S'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    29.0,   -- Temperature
    1010.5, -- Pressure
    750,    -- Altitude
    7.5,    -- Pm1_0
    12.5,   -- Pm2_5
    17.5,   -- Pm10
    0.035,  -- Ozone
    72,     -- Air_quality
    8.5,    -- Uv
    16.5,   -- WindSpeed
    'SW'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    28.5,   -- Temperature
    1011.5, -- Pressure
    800,    -- Altitude
    8.0,    -- Pm1_0
    13.0,   -- Pm2_5
    18.0,   -- Pm10
    0.036,  -- Ozone
    70,     -- Air_quality
    9.0,    -- Uv
    17.0,   -- WindSpeed
    'W'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    31.0,   -- Temperature
    1010.0, -- Pressure
    850,    -- Altitude
    8.5,    -- Pm1_0
    13.5,   -- Pm2_5
    18.5,   -- Pm10
    0.037,  -- Ozone
    68,     -- Air_quality
    9.5,    -- Uv
    17.5,   -- WindSpeed
    'NW'    -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    24.0,   -- Temperature
    1016.0, -- Pressure
    900,    -- Altitude
    9.0,    -- Pm1_0
    14.0,   -- Pm2_5
    19.0,   -- Pm10
    0.038,  -- Ozone
    65,     -- Air_quality
    10.0,   -- Uv
    18.0,   -- WindSpeed
    'N'     -- WindDirection
);

CALL sp_StoreMeteorologicalData(
    32.0,   -- Temperature
    1015.5, -- Pressure
    950,    -- Altitude
    9.5,    -- Pm1_0
    14.5,   -- Pm2_5
    19.5,   -- Pm10
    0.039,  -- Ozone
    62,     -- Air_quality
    10.5,   -- Uv
    18.5,   -- WindSpeed
    'NE'    -- WindDirection
);
create view sp_view_weatherdata as
      select *, DATE_FORMAT(date_time, '%H:%i:%S') AS hora  from weather_measurements 
      where hour(date_time) between  (hour("12:00:00")-5) and hour(curtime()) 
      group by HOUR(date_time)  order by  date_time DESC limit 6;
 drop view sp_view_weatherdata;
 select * from sp_view_weatherdata;     
 select * from sp_view_weatherdata;

select * from rain;
create view sp_view_dataRain as
      select * from rain 
      where hour(date_time) between  (hour(curtime())-5) and hour(curtime()) 
      group by HOUR(date_time)  order by date_time DESC limit 6;

delimiter //

select * from estacionmeteorologico.rain;
INSERT INTO estacionmeteorologico.rain (id, lm2, tds, date_time) VALUES ( '3.2', '156', '2024-02-29 06:30:00');
INSERT INTO estacionmeteorologico.rain (id, lm2, tds, date_time) VALUES ( '13.2', '152', '2024-02-29 06:50:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('515', '153', '2024-02-29 07:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('1515', '154', '2024-02-29 07:50:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('26', '152', '2024-02-29 07:55:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('5256.2', '15', '2024-02-29 08:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('15', '1', '2024-02-29 08:50:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('48', '2', '2024-02-29 09:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('78', '3', '2024-02-29 09:50:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('89', '1', '2024-02-29 10:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('56', '4', '2024-02-29 10:40:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('15', '8', '2024-02-29 10:50:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('15', '56', '2024-02-29 11:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('15', '45', '2024-02-29 11:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('894', '65', '2024-02-29 11:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('489', '158', '2024-02-29 12:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('48', '51', '2024-02-29 12:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('48', '561', '2024-02-29 12:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('498', '15', '2024-02-29 13:20:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('15', '189', '2024-02-29 13:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('148', '8', '2024-02-29 13:50:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('485', '84', '2024-02-29 14:20:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('51', '454', '2024-02-29 14:30:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('8', '4', '2024-02-29 14:50:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('96', '15', '2024-02-29 15:10:00');
INSERT INTO estacionmeteorologico.rain (lm2, tds, date_time) VALUES ('548', '515', '2024-02-29 15:20:00');

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


SELECT VERSION();
