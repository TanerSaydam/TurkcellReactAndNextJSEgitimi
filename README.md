# Turkcell React ve Next.js Eğitimi

# React Kurulum CLI Komutları
- React uygulamasını oluşturmak için, projeyi oluşturacağınız klasörde bu CLI komutunu command promp ya da powershell de çalıştırmanız lazım
```bash
npx create-react-app my-app 
```

- React uygulamasını ayağa kaldırmak için aşağıdaki kodu mevcut proje klasöründe çalıştırıyoruz
```bash
npm start
```

- React uygulaması http://localhost:3000 üzerinden ayağa kalkar

- React uygulamasını Vite.js ile oluşturmak istersek (daha hızlı uygulama oluşturuyor)
```bash
npm create vite my-vite-react-app
```
- options olarak react'ı seçmeliyiz

- React uygulamasını vite.js içerisinde ayağa kaldırmak için aşağıdaki kodu mevcut proje klasöründe çalıştırıyoruz
```bash
npm run dev
```

- Vite.js üzerinde çalışan React uygulaması http://localhost:5173 üzerinden ayağa kalkar


## React Router
React yapısında router içerisinde gelmiyor. O yüzden ekstra kütüphane kurarak route'u onun üzerinden yönetiyoruz.

```bash
npm install -D react-router-dom
```

## Next.js CLI Komutları

- Kurulum
```bash
npx create-next-app
```

- Çalıştırma
```bash
npm run dev
```