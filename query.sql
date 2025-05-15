SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;

FLUSH PRIVILEGES;

EXIT;

SELECT d.department_name, COUNT(e.employee_id) as employee_count
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_name;

-- INNER JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;

-- LEFT JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id;

-- RIGHT JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id;

-- CROSS JOIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
CROSS JOIN departments d;

WITH avg_salary AS (
    SELECT AVG(salary) as avg_sal
    FROM employees
)
SELECT e.first_name, e.last_name, e.salary
FROM employees e, avg_salary
WHERE e.salary > avg_salary.avg_sal;

SELECT e.first_name, e.last_name, e.salary
FROM employees e
WHERE e.salary < (
    SELECT salary
    FROM employees
    WHERE first_name = 'Steven' AND last_name = 'King'
);

SELECT d.department_name, e.first_name, e.last_name
FROM departments d
LEFT JOIN employees e ON d.manager_id = e.employee_id;

SELECT DISTINCT l.city
FROM locations l
INNER JOIN departments d ON l.location_id = d.location_id;