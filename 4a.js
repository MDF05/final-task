// Tampilkan seluruh data dari table provinsi
SELECT * FROM public."Provinsis";

// Tampilkan seluruh data provinsi beserta kabupaten
SELECT p.*, k.*
FROM public."Provinsis" p
INNER JOIN public."Kabupatens" k ON p.id = k.provinsi_id;

// Tampilkan seluruh data provinsi yang berada di pulau 
SELECT *
FROM public."Provinsis"
WHERE pulau = 'jawa';

SELECT *
FROM public."Provinsis"
WHERE pulau = 'sumatera';
