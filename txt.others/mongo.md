# 🚀 MongoDB Setup on Linux VPS (Beginner → Production Ready + Scalable)

A clean, real-world guide to:

* Install MongoDB
* Secure it properly 🔐
* Use RBAC (users & roles)
* Make it production-ready & scalable 📈

---

# 🧱 1. Install MongoDB

### 🔑 Step 1: Import GPG Key (verify package authenticity)

```bash
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
```

👉 Ensures packages are trusted (security)

---

### 📦 Step 2: Add Repository

```bash
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

👉 Adds official MongoDB source for updates

---

### ⚙️ Step 3: Install

```bash
sudo apt update
sudo apt install -y mongodb-org
```

---

# ▶️ 2. Start MongoDB Service

```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

👉 Starts MongoDB + auto-start on reboot

Check:

```bash
sudo systemctl status mongod
```

---

# 🧪 3. Test MongoDB

```bash
mongosh
```

👉 If shell opens → working ✅

Exit:

```bash
exit
```

---

# 🔐 4. Create Admin User (IMPORTANT ORDER)

👉 Do this BEFORE enabling security

```bash
mongosh
```

```js
use admin

db.createUser({
  user: "admin",
  pwd: "StrongPassword123",
  roles: [{ role: "root", db: "admin" }]
})
```

👉 This is your **superuser (full control)**

---

# 🔐 5. Enable Authentication (Security)

```bash
sudo nano /etc/mongod.conf
```

Add:

```yaml
security:
  authorization: enabled
```

⚠️ YAML Rules:

* 2 spaces indentation
* space after `:`

---

# 🔄 6. Restart MongoDB

```bash
sudo systemctl restart mongod
```

---

# 🔑 7. Login with Auth

```bash
mongosh -u admin -p --authenticationDatabase admin
```

---

# 👤 8. Create Application User (RBAC)

```js
use vesselDb

db.createUser({
  user: "appUser",
  pwd: "AppPass123",
  roles: [{ role: "readWrite", db: "vesselDb" }]
})
```

👉 This user is used in your backend (NOT admin)

---

# 🧠 Roles Explained

| Role      | Purpose                  |
| --------- | ------------------------ |
| root      | Full access (admin only) |
| readWrite | App access (CRUD)        |
| read      | Read-only                |
| dbAdmin   | Manage indexes           |
| userAdmin | Manage users             |
| dbOwner   | Full control of one DB   |

---

# 🌐 9. Network & Access Control

## Default (SAFE)

```yaml
bindIp: 127.0.0.1
```

👉 Only local access (recommended)

---

## Remote Access (Optional)

```yaml
bindIp: 0.0.0.0
```

⚠️ Only use with firewall!

---

# 🔥 10. Firewall Setup

Install:

```bash
sudo apt install ufw
sudo ufw enable
```

---

## Secure Rule (recommended)

```bash
sudo ufw allow from YOUR_IP to any port 27017
```

---

## Open (NOT recommended)

```bash
sudo ufw allow 27017
```

---

# 🔌 11. Connect from Node.js

## ✅ Correct (App User)

```bash
mongodb://appUser:AppPass123@localhost:27017/vesselDb
```

## ❌ Avoid

```bash
mongodb://admin:password...
```

---

# 🧠 12. Production Architecture

## 🟢 Option 1: Basic

* App + DB same server
* Easy but limited

---

## 🟡 Option 2: Better (Recommended)

* VPS 1 → App
* VPS 2 → MongoDB

👉 Better performance & security

---

## 🔴 Option 3: Scalable (Production)

### Replica Set

* Primary → writes
* Secondary → reads + backup

Connection:

```bash
mongodb://user:pass@host1,host2,host3/db?replicaSet=rs0
```

---

# 📊 13. Performance & Optimization

## Enable WiredTiger cache tuning (optional)

```yaml
storage:
  wiredTiger:
    engineConfig:
      cacheSizeGB: 1
```

---

## Logs

```bash
/var/log/mongodb/mongod.log
```

---

## Monitor

```bash
mongostat
mongotop
```

---

# 💾 14. Backup Strategy (VERY IMPORTANT)

## Manual backup

```bash
mongodump --db vesselDb --out /backup
```

---

## Restore

```bash
mongorestore /backup
```

---

## Recommended

* Daily cron backup
* Store on another server

---

# 🔐 15. Security Best Practices

✅ Use strong passwords
✅ Never expose DB publicly
✅ Use RBAC (no admin in app)
✅ Restrict IP via firewall
✅ Keep Mongo updated

---

# ⚠️ Common Mistakes

❌ Enabling auth before creating admin
❌ YAML indentation errors
❌ Using admin user in app
❌ Opening DB to world (0.0.0.0 + no firewall)

---

# ✅ Final Checklist

* [ ] MongoDB installed
* [ ] Service running
* [ ] Admin user created
* [ ] Auth enabled
* [ ] App user created
* [ ] Firewall secured
* [ ] Backup configured

---

# 🚀 Advanced (Next Level)

* Replica Set setup
* Sharding (very large scale)
* MongoDB Atlas (managed DB)
* Monitoring with Prometheus/Grafana

---

# 🧠 Final Understanding

* `use db` → where user is stored
* `roles` → what access user has
* One user → multiple DB access possible

---

# 🔚 Your Final URI

```bash
mongodb://appUser:AppPass123@localhost:27017/vesselDb
```

---

👉 This setup is now:

* ✅ Secure
* ✅ Clean
* ✅ Scalable-ready
* ✅ Production-ready

---
