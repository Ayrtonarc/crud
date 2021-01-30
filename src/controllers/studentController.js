const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM students', (err, students) => {
            if(err){
                res.json(err);
            }
            res.json(students);
        });
    });
};

controller.save = (req, res) => {
 req.getConnection((err, conn) => {
     const data = req.body;

     conn.query('INSERT INTO students set ?', [data], (err, students) =>{
        console.log(students);
        res.redirect('/');
     });
 })
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newStudent = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE students set ? WHERE id = ?', [newStudent ,id], (err, students) => {
            res.redirect('/');
        });
    });

};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM students WHERE id = ?', [id], (err, students) => {
           res.redirect('/'); 
        });
    })
};

module.exports = controller;