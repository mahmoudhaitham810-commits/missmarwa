const DB = {
    async login(studentId, password) {
        const res = await fetch('/api/auth?action=login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId, password })
        });
        if (!res.ok) throw new Error('Wrong ID/Password');
        return await res.json();
    },

    async signup(payload) {
        const res = await fetch('/api/auth?action=signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'فشل إنشاء الحساب');
        return data;
    },

    async getStudents() {
        const res = await fetch('/api/students');
        return await res.json();
    },

    async resetPassword(studentId, password) {
        const res = await fetch('/api/students?action=reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId, password })
        });
        return await res.json();
    },

    async deleteStudent(studentId) {
        const res = await fetch('/api/students?action=delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId })
        });
        return await res.json();
    },

    async getLessons(grade = 'ALL', category = 'ALL') {
        const res = await fetch(`/api/lessons?grade=${encodeURIComponent(grade)}&category=${encodeURIComponent(category)}`);
        return await res.json();
    },

    async addLesson(lesson) {
        const res = await fetch('/api/lessons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lesson)
        });
        return await res.json();
    },

    async deleteLesson(id) {
        const res = await fetch(`/api/lessons?id=${encodeURIComponent(id)}`, {
            method: 'DELETE'
        });
        return await res.json();
    }
};