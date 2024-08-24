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
	state_id INT REFERENCES states(id)
);

-- Создание таблицы "Тренеровок"
CREATE TABLE workouts (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(255),
	trainer VARCHAR(255),
	duration VARCHAR(255)
)

-- Создание View "schedule_details"
CREATE VIEW schedule_details AS
SELECT 
    s.id,
    s.start_date,
    u.username AS user_name,
    w.title AS workout_title,
    st.name AS state_name
FROM schedules s
JOIN users u ON s.user_id = u.id
JOIN workouts w ON s.workout_id = w.id
JOIN states st ON s.state_id = st.id;


SELECT * FROM schedule_details;