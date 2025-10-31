# CI/CD Documentation

## 🔍 Morgan Logging

تم إضافة Morgan للـ HTTP request logging:

- **Development**: يستخدم `dev` format (ألوان وdetailed)
- **Production**: يستخدم `combined` format (Apache combined log format)

سترى في console كل الطلبات الواردة مع:
- HTTP method
- URL
- Status code
- Response time

## 🚀 CI/CD Pipeline

### Workflows

#### 1. `.github/workflows/ci.yml`
Pipeline كامل مع test و deploy:

**Triggers:**
- Push إلى `main`, `master`, أو `develop`
- Pull requests إلى `main` أو `master`

**Jobs:**
1. **Test**: 
   - Type checking
   - Build
   - Tests (optional)

2. **Deploy** (فقط على main/master):
   - Build للمنتج
   - Placeholder للـ deployment steps

#### 2. `.github/workflows/test.yml`
Pipeline بسيط للاختبارات فقط:

**Triggers:**
- أي push
- أي pull request

**Job:**
- Type checking
- Build

### استخدام CI/CD

1. **عند Push:**
   - يتم تشغيل workflow تلقائياً
   - يتم فحص الأخطاء والبناء

2. **عند Pull Request:**
   - يتم فحص الكود قبل الدمج

3. **للـ Deployment:**
   - عدّل `.github/workflows/ci.yml` في job `deploy`
   - أضف خطوات الـ deployment الخاصة بك

### أمثلة Deployment

**Heroku:**
```yaml
- name: Deploy to Heroku
  uses: akhileshns/heroku-deploy@v3.12.14
  with:
    heroku_api_key: ${{secrets.HEROKU_API_KEY}}
    heroku_app_name: "your-app-name"
```

**Vercel:**
```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v20
  with:
    vercel-token: ${{secrets.VERCEL_TOKEN}}
    vercel-org-id: ${{secrets.VERCEL_ORG_ID}}
    vercel-project-id: ${{secrets.VERCEL_PROJECT_ID}}
```

**SSH (VPS):**
```yaml
- name: Deploy via SSH
  uses: appleboy/ssh-action@master
  with:
    host: ${{secrets.HOST}}
    username: ${{secrets.USERNAME}}
    key: ${{secrets.SSH_KEY}}
    script: |
      cd /path/to/app
      git pull
      npm install
      npm run build
      pm2 restart app
```

## 📝 Notes

- جميع الـ workflows تستخدم Node.js 18
- يتم cache للـ node_modules لتسريع البناء
- Deployment job يعمل فقط على main/master branches

