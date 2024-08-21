## Database strucuture

-- Создание таблицы "Пользователи"
CREATE TABLE users (
	id BIGSERIAL PRIMARY KEY,
	username VARCHAR(255),
	password VARCHAR(255)
)

-- Создание таблицы "Диспетчеры"
CREATE TABLE schedules (
    id BIGSERIAL PRIMARY KEY,
    state VARCHAR(255),
    start VARCHAR(255),
    user_id BIGINT REFERENCES users(id),
    workout_id BIGINT REFERENCES workouts(id)
);

-- Создание таблицы "Тренеровок"
CREATE TABLE workouts (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(255),
	trainer VARCHAR(255),
	duration VARCHAR(255)
)

-- Создание View "Диспечера"
CREATE VIEW dispatchers_view AS
SELECT 
    d.id,
	d.user_id,
	CONCAT(d.lastname, ' ', d.firstname, ' ', d.surename) AS fullname,
	d.phone,
	d.email,
	d.address,
	d.comment,
	u.username
FROM 
    dispatchers d
JOIN 
    users u ON u.id = d.user_id