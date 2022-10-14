import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="/static/assets/css/bootstrap.css" />
                <link rel="stylesheet" href="/static/assets/vendors/chartjs/Chart.min.css" />
                <link rel="stylesheet" href="/static/assets/vendors/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="/static/assets/css/app.css" />
                <link rel="shortcut icon" href="/static/assets/images/favicon.svg" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="/static/assets/js/feather-icons/feather.min.js"></script>
                <script src="/static/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                <script src="/static/assets/js/app.js"></script>
                <script src="/static/assets/vendors/chartjs/Chart.min.js"></script>
                <script src="/static/assets/vendors/apexcharts/apexcharts.min.js"></script>
            </body>
        </Html>
    )
}