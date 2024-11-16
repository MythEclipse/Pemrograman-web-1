# Pemrograman Web 1

Selamat datang di repositori Pemrograman Web 1.

## Demo

Anda dapat melihat demo web ini di [pw1.asepharyana.cloud](http://pw1.asepharyana.cloud).

## Deskripsi

Repositori ini berisi kode sumber untuk mata kuliah Praktikum Pemrograman Web 1. 

### Installation

To get started with this project locally, follow these steps:

#### Setup pnpm

**On Windows:**

1. Set the execution policy to allow running scripts:

    ```cmd
    Set-ExecutionPolicy RemoteSigned
    ```

2. Install `fnm` (Fast Node Manager) using `winget`:

    ```cmd
    winget install Schniz.fnm
    ```

3. Configure `fnm` environment:

    ```cmd
    fnm env --use-on-cd | Out-String | Invoke-Expression
    ```

4. Download and install Node.js:

    ```cmd
    fnm use --install-if-missing 22
    ```

5. Verify the Node.js version:

    ```cmd
    node -v # should print `v22.11.0`
    ```

6. Verify the npm version:

    ```cmd
    npm -v # should print `10.9.0`
    ```

7. Install `pnpm` globally using `npm`:

    ```cmd
    npm install -g pnpm
    ```

8. Clone the repository:

    ```cmd
    git clone https://github.com/Asepharyana71/asepharyana.my.id.git
    ```

9. Navigate into the project directory:

    ```cmd
    cd asepharyana.my.id
    ```

10. Install the dependencies:

    ```cmd
    pnpm install
    ```

11. Run the development server:

    ```cmd
    pnpm run dev
    ```

**On Linux:**

1. Install `pnpm` globally using `curl`:

    ```bash
    curl -fsSL https://get.pnpm.io/v6/install.sh | sh
    ```

2. Clone the repository:

    ```bash
    git clone https://github.com/Asepharyana71/asepharyana.my.id.git
    ```

3. Navigate into the project directory:

    ```bash
    cd asepharyana.my.id
    ```

4. Install the dependencies:

    ```bash
    pnpm install
    ```

5. Run the development server:

    ```bash
    pnpm run dev
    ```
