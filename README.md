# Pemrograman Web 1

Selamat datang di repositori Pemrograman Web 1.

## Demo

Anda dapat melihat demo web ini di [pw1.asepharyana.cloud](http://pw1.asepharyana.cloud).

## Deskripsi

Repositori ini berisi kode sumber untuk mata kuliah Praktikum Pemrograman Web 1. 

### Instalasi

Untuk memulai proyek ini secara lokal, ikuti langkah-langkah berikut:

#### Setup pnpm

**Di Windows:**

1. Atur kebijakan eksekusi untuk mengizinkan menjalankan skrip:

    ```cmd
    Set-ExecutionPolicy RemoteSigned
    ```

2. Instal `fnm` (Fast Node Manager) menggunakan `winget`:

    ```cmd
    winget install Schniz.fnm
    ```

3. Konfigurasi lingkungan `fnm`:

    ```cmd
    fnm env --use-on-cd | Out-String | Invoke-Expression
    ```

4. Unduh dan instal Node.js:

    ```cmd
    fnm use --install-if-missing 22
    ```

5. Verifikasi versi Node.js:

    ```cmd
    node -v # harus mencetak `v22.11.0`
    ```

6. Verifikasi versi npm:

    ```cmd
    npm -v # harus mencetak `10.9.0`
    ```

7. Instal `pnpm` secara global menggunakan `npm`:

    ```cmd
    npm install -g pnpm
    ```

8. Clone repositori:

    ```cmd
    git clone https://github.com/Asepharyana71/asepharyana.my.id.git
    ```

9. Masuk ke direktori proyek:

    ```cmd
    cd asepharyana.my.id
    ```

10. Instal dependensi:

    ```cmd
    pnpm install
    ```

11. Jalankan server pengembangan:

    ```cmd
    pnpm run dev
    ```

**Di Linux:**

1. Instal `pnpm` secara global menggunakan `curl`:

    ```bash
    curl -fsSL https://get.pnpm.io/v6/install.sh | sh
    ```

2. Clone repositori:

    ```bash
    git clone https://github.com/Asepharyana71/asepharyana.my.id.git
    ```

3. Masuk ke direktori proyek:

    ```bash
    cd asepharyana.my.id
    ```

4. Instal dependensi:

    ```bash
    pnpm install
    ```

5. Jalankan server pengembangan:

    ```bash
    pnpm run dev
    ```
