$(document).ready(function() {
    $.get('https://api.ethplorer.io/getAddressInfo/0x249bb2861e1d0a3f1f065fb35830ce5f6f2409f2?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
        function(data) {
            var aave_claim_cov = data.tokens[1].balance / 1000000000000000000;
            var aave_claim_dai = data.tokens[0].balance / 1000000000000000000;
            var aave_claim_tvl = (aave_claim_dai / 2) * 100;
            $('#aave_claim_cov').html(commafy(aave_claim_cov.toFixed(0)));
            $('#aave_claim_dai').html(commafy(aave_claim_dai.toFixed(0)));
            $('#aave_claim_tvl').html(commafy(aave_claim_tvl.toFixed(0)));

            $.get('https://api.ethplorer.io/getAddressInfo/0x0490b8bc5898eac3e41857d560f0a58aa393321e?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                function(data) {
                    var aave_noclaim_cov = data.tokens[0].balance / 1000000000000000000;
                    var aave_noclaim_dai = data.tokens[1].balance / 1000000000000000000;
                    var aave_noclaim_tvl = (aave_noclaim_dai / 2) * 100;
                    $('#aave_noclaim_cov').html(commafy(aave_noclaim_cov.toFixed(0)));
                    $('#aave_noclaim_dai').html(commafy(aave_noclaim_dai.toFixed(0)));
                    $('#aave_noclaim_tvl').html(commafy(aave_noclaim_tvl.toFixed(0)));

                    $.get('https://api.ethplorer.io/getAddressInfo/0xcacc5664def7d868f80f6d55157aae0c3aebd348?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                        function(data) {
                            var bal_claim_cov = data.tokens[0].balance / 1000000000000000000;
                            var bal_claim_dai = data.tokens[1].balance / 1000000000000000000;
                            var bal_claim_tvl = (bal_claim_dai / 2) * 100;
                            $('#bal_claim_cov').html(commafy(bal_claim_cov.toFixed(0)));
                            $('#bal_claim_dai').html(commafy(bal_claim_dai.toFixed(0)));
                            $('#bal_claim_tvl').html(commafy(bal_claim_tvl.toFixed(0)));

                            $.get('https://api.ethplorer.io/getAddressInfo/0x6c701226204f7937750671b041996a73180a47d6?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                function(data) {
                                    var bal_noclaim_cov = data.tokens[1].balance / 1000000000000000000;
                                    var bal_noclaim_dai = data.tokens[0].balance / 1000000000000000000;
                                    var bal_noclaim_tvl = (bal_noclaim_dai / 2) * 100;
                                    $('#bal_noclaim_cov').html(commafy(bal_noclaim_cov.toFixed(0)));
                                    $('#bal_noclaim_dai').html(commafy(bal_noclaim_dai.toFixed(0)));
                                    $('#bal_noclaim_tvl').html(commafy(bal_noclaim_tvl.toFixed(0)));

                                    $.get('https://api.ethplorer.io/getAddressInfo/0xb70c68a4f5446193853a4b9cb4e8cea27b606692?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                        function(data) {
                                            var barn_claim_cov = data.tokens[1].balance / 1000000000000000000;
                                            var barn_claim_dai = data.tokens[0].balance / 1000000000000000000;
                                            var barn_claim_tvl = (barn_claim_dai / 2) * 100;
                                            $('#barn_claim_cov').html(commafy(barn_claim_cov.toFixed(0)));
                                            $('#barn_claim_dai').html(commafy(barn_claim_dai.toFixed(0)));
                                            $('#barn_claim_tvl').html(commafy(barn_claim_tvl.toFixed(0)));

                                            $.get('https://api.ethplorer.io/getAddressInfo/0xd9d5ed792a5d89cd73a0764ee263e4a5df2dd542?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                function(data) {
                                                    var barn_noclaim_cov = data.tokens[0].balance / 1000000000000000000;
                                                    var barn_noclaim_dai = data.tokens[1].balance / 1000000000000000000;
                                                    var barn_noclaim_tvl = (barn_noclaim_dai / 2) * 100;
                                                    $('#barn_noclaim_cov').html(commafy(barn_noclaim_cov.toFixed(0)));
                                                    $('#barn_noclaim_dai').html(commafy(barn_noclaim_dai.toFixed(0)));
                                                    $('#barn_noclaim_tvl').html(commafy(barn_noclaim_tvl.toFixed(0)));

                                                    $.get('https://api.ethplorer.io/getAddressInfo/0xb18a741d176113abdcd7562b15a320133bf30023?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                        function(data) {
                                                            var cream_claim_cov = data.tokens[1].balance / 1000000000000000000;
                                                            var cream_claim_dai = data.tokens[0].balance / 1000000000000000000;
                                                            var cream_claim_tvl = (cream_claim_dai / 2) * 100;
                                                            $('#cream_claim_cov').html(commafy(cream_claim_cov.toFixed(0)));
                                                            $('#cream_claim_dai').html(commafy(cream_claim_dai.toFixed(0)));
                                                            $('#cream_claim_tvl').html(commafy(cream_claim_tvl.toFixed(0)));

                                                            $.get('https://api.ethplorer.io/getAddressInfo/0xa36c6f854ef17238a6bdef7eec3b5af371006c16?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                function(data) {
                                                                    var cream_noclaim_cov = data.tokens[1].balance / 1000000000000000000;
                                                                    var cream_noclaim_dai = data.tokens[0].balance / 1000000000000000000;
                                                                    var cream_noclaim_tvl = (cream_noclaim_dai / 2) * 100;
                                                                    $('#cream_noclaim_cov').html(commafy(cream_noclaim_cov.toFixed(0)));
                                                                    $('#cream_noclaim_dai').html(commafy(cream_noclaim_dai.toFixed(0)));
                                                                    $('#cream_noclaim_tvl').html(commafy(cream_noclaim_tvl.toFixed(0)));

                                                                    $.get('https://api.ethplorer.io/getAddressInfo/0x51a370f47a2def11e38ec529706cde52e7d4a333?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                        function(data) {
                                                                            var crv_claim_cov = data.tokens[0].balance / 1000000000000000000;
                                                                            var crv_claim_dai = data.tokens[1].balance / 1000000000000000000;
                                                                            var crv_claim_tvl = (crv_claim_dai / 2) * 100;
                                                                            $('#crv_claim_cov').html(commafy(crv_claim_cov.toFixed(0)));
                                                                            $('#crv_claim_dai').html(commafy(crv_claim_dai.toFixed(0)));
                                                                            $('#crv_claim_tvl').html(commafy(crv_claim_tvl.toFixed(0)));

                                                                            $.get('https://api.ethplorer.io/getAddressInfo/0xd9b92e84b9f96267bf548cfe3a3ae21773872138?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                function(data) {
                                                                                    var crv_noclaim_cov = data.tokens[0].balance / 1000000000000000000;
                                                                                    var crv_noclaim_dai = data.tokens[1].balance / 1000000000000000000;
                                                                                    var crv_noclaim_tvl = (crv_noclaim_dai / 2) * 100;
                                                                                    $('#crv_noclaim_cov').html(commafy(crv_noclaim_cov.toFixed(0)));
                                                                                    $('#crv_noclaim_dai').html(commafy(crv_noclaim_dai.toFixed(0)));
                                                                                    $('#crv_noclaim_tvl').html(commafy(crv_noclaim_tvl.toFixed(0)));

                                                                                    $.get('https://api.ethplorer.io/getAddressInfo/0xf9600db3b98c34e5ac9fbf7fc30d6dfc8b574988?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                        function(data) {
                                                                                            var harvest_claim_cov = data.tokens[1].balance / 1000000000000000000;
                                                                                            var harvest_claim_dai = data.tokens[0].balance / 1000000000000000000;
                                                                                            var harvest_claim_tvl = (harvest_claim_dai / 2) * 100;
                                                                                            $('#harvest_claim_cov').html(commafy(harvest_claim_cov.toFixed(0)));
                                                                                            $('#harvest_claim_dai').html(commafy(harvest_claim_dai.toFixed(0)));
                                                                                            $('#harvest_claim_tvl').html(commafy(harvest_claim_tvl.toFixed(0)));

                                                                                            $.get('https://api.ethplorer.io/getAddressInfo/0x9a43e689dbe8f60ec12ba899d58b94a14d852e37?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                function(data) {
                                                                                                    var harvest_noclaim_cov = data.tokens[0].balance / 1000000000000000000;
                                                                                                    var harvest_noclaim_dai = data.tokens[1].balance / 1000000000000000000;
                                                                                                    var harvest_noclaim_tvl = (harvest_noclaim_dai / 2) * 100;
                                                                                                    $('#harvest_noclaim_cov').html(commafy(harvest_noclaim_cov.toFixed(0)));
                                                                                                    $('#harvest_noclaim_dai').html(commafy(harvest_noclaim_dai.toFixed(0)));
                                                                                                    $('#harvest_noclaim_tvl').html(commafy(harvest_noclaim_tvl.toFixed(0)));

                                                                                                    $.get('https://api.ethplorer.io/getAddressInfo/0xa342187f34f814fd194b65a2b56bcddc3be2eda9?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                        function(data) {
                                                                                                            var pick_claim_cov = data.tokens[1].balance / 1000000000000000000;
                                                                                                            var pick_claim_dai = data.tokens[0].balance / 1000000000000000000;
                                                                                                            var pick_claim_tvl = (pick_claim_dai / 2) * 100;
                                                                                                            $('#pick_claim_cov').html(commafy(pick_claim_cov.toFixed(0)));
                                                                                                            $('#pick_claim_dai').html(commafy(pick_claim_dai.toFixed(0)));
                                                                                                            $('#pick_claim_tvl').html(commafy(pick_claim_tvl.toFixed(0)));

                                                                                                            $.get('https://api.ethplorer.io/getAddressInfo/0xb519cb3ed5764a2d1150fa48dfcd41dcce757232?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                                function(data) {
                                                                                                                    var pick_noclaim_cov = data.tokens[1].balance / 1000000000000000000;
                                                                                                                    var pick_noclaim_dai = data.tokens[0].balance / 1000000000000000000;
                                                                                                                    var pick_noclaim_tvl = (pick_noclaim_dai / 2) * 100;
                                                                                                                    $('#pick_noclaim_cov').html(commafy(pick_noclaim_cov.toFixed(0)));
                                                                                                                    $('#pick_noclaim_dai').html(commafy(pick_noclaim_dai.toFixed(0)));
                                                                                                                    $('#pick_noclaim_tvl').html(commafy(pick_noclaim_tvl.toFixed(0)));

                                                                                                                    $.get('https://api.ethplorer.io/getAddressInfo/0x05a56e62298e0a5f1f164aafc1c1f89ca29f06d7?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                                        function(data) {
                                                                                                                            var ren_claim_cov = data.tokens[0].balance / 1000000000000000000;
                                                                                                                            var ren_claim_dai = data.tokens[1].balance / 1000000000000000000;
                                                                                                                            var ren_claim_tvl = (ren_claim_dai / 2) * 100;
                                                                                                                            $('#ren_claim_cov').html(commafy(ren_claim_cov.toFixed(0)));
                                                                                                                            $('#ren_claim_dai').html(commafy(ren_claim_dai.toFixed(0)));
                                                                                                                            $('#ren_claim_tvl').html(commafy(ren_claim_tvl.toFixed(0)));

                                                                                                                            $.get('https://api.ethplorer.io/getAddressInfo/0x33bc3abfabde8fceb0ced58e16184fb4cfc163ef?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                                                function(data) {
                                                                                                                                    var ren_noclaim_cov = data.tokens[1].balance / 1000000000000000000;
                                                                                                                                    var ren_noclaim_dai = data.tokens[0].balance / 1000000000000000000;
                                                                                                                                    var ren_noclaim_tvl = (ren_noclaim_dai / 2) * 100;
                                                                                                                                    $('#ren_noclaim_cov').html(commafy(ren_noclaim_cov.toFixed(0)));
                                                                                                                                    $('#ren_noclaim_dai').html(commafy(ren_noclaim_dai.toFixed(0)));
                                                                                                                                    $('#ren_noclaim_tvl').html(commafy(ren_noclaim_tvl.toFixed(0)));

                                                                                                                                    $.get('https://api.ethplorer.io/getAddressInfo/0xfde04c4e7017f7ab76c109c33ba9a18ab3e53350?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                                                        function(data) {
                                                                                                                                            var sushi_claim_cov = data.tokens[0].balance / 1000000000000000000;
                                                                                                                                            var sushi_claim_dai = data.tokens[1].balance / 1000000000000000000;
                                                                                                                                            var sushi_claim_tvl = (sushi_claim_dai / 2) * 100;
                                                                                                                                            $('#sushi_claim_cov').html(commafy(sushi_claim_cov.toFixed(0)));
                                                                                                                                            $('#sushi_claim_dai').html(commafy(sushi_claim_dai.toFixed(0)));
                                                                                                                                            $('#sushi_claim_tvl').html(commafy(sushi_claim_tvl.toFixed(0)));

                                                                                                                                            $.get('https://api.ethplorer.io/getAddressInfo/0xe093973b45d3ddfc7d789850ad5b5bbd6a59846f?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                                                                function(data) {
                                                                                                                                                    var sushi_noclaim_cov = data.tokens[1].balance / 1000000000000000000;
                                                                                                                                                    var sushi_noclaim_dai = data.tokens[0].balance / 1000000000000000000;
                                                                                                                                                    var sushi_noclaim_tvl = (sushi_noclaim_dai / 2) * 100;
                                                                                                                                                    $('#sushi_noclaim_cov').html(commafy(sushi_noclaim_cov.toFixed(0)));
                                                                                                                                                    $('#sushi_noclaim_dai').html(commafy(sushi_noclaim_dai.toFixed(0)));
                                                                                                                                                    $('#sushi_noclaim_tvl').html(commafy(sushi_noclaim_tvl.toFixed(0)));

                                                                                                                                                    $.get('https://api.ethplorer.io/getAddressInfo/0xd5f9790b02357666a168ff09f662ee569b2fee36?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                                                                        function(data) {
                                                                                                                                                            var yearn_claim_cov = data.tokens[1].balance / 1000000000000000000;
                                                                                                                                                            var yearn_claim_dai = data.tokens[0].balance / 1000000000000000000;
                                                                                                                                                            var yearn_claim_tvl = (yearn_claim_dai / 2) * 100;
                                                                                                                                                            $('#yearn_claim_cov').html(commafy(yearn_claim_cov.toFixed(0)));
                                                                                                                                                            $('#yearn_claim_dai').html(commafy(yearn_claim_dai.toFixed(0)));
                                                                                                                                                            $('#yearn_claim_tvl').html(commafy(yearn_claim_tvl.toFixed(0)));

                                                                                                                                                            $.get('https://api.ethplorer.io/getAddressInfo/0xf1469c0c8cde46466d6cbf0a1e0b03b98cbb301f?apiKey=EK-eUWJC-VPhKsoo-jdSwy',
                                                                                                                                                                function(data) {
                                                                                                                                                                    var yearn_noclaim_cov = data.tokens[0].balance / 1000000000000000000;
                                                                                                                                                                    var yearn_noclaim_dai = data.tokens[1].balance / 1000000000000000000;
                                                                                                                                                                    var yearn_noclaim_tvl = (yearn_noclaim_dai / 2) * 100;
                                                                                                                                                                    $('#yearn_noclaim_cov').html(commafy(yearn_noclaim_cov.toFixed(0)));
                                                                                                                                                                    $('#yearn_noclaim_dai').html(commafy(yearn_noclaim_dai.toFixed(0)));
                                                                                                                                                                    $('#yearn_noclaim_tvl').html(commafy(yearn_noclaim_tvl.toFixed(0)));

                                                                                                                                                                    $.get('https://api.coingecko.com/api/v3/simple/price?ids=safe2&vs_currencies=usd',
                                                                                                                                                                        function(data) {

                                                                                                                                                                            var safe2_price = (data.safe2.usd);

                                                                                                                                                                            var aave_claim_apr = ((((safe2_price * 49.05) / aave_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#aave_claim_apr').html(aave_claim_apr);
                                                                                                                                                                            var aave_noclaim_apr = ((((safe2_price * 16.35) / aave_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#aave_noclaim_apr').html(aave_noclaim_apr);

                                                                                                                                                                            var bal_claim_apr = ((((safe2_price * 49.05) / bal_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#bal_claim_apr').html(bal_claim_apr);
                                                                                                                                                                            var bal_noclaim_apr = ((((safe2_price * 16.35) / bal_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#bal_noclaim_apr').html(bal_noclaim_apr);

                                                                                                                                                                            var barn_claim_apr = ((((safe2_price * 39.34) / barn_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#barn_claim_apr').html(barn_claim_apr);
                                                                                                                                                                            var barn_noclaim_apr = ((((safe2_price * 13.08) / barn_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#barn_noclaim_apr').html(barn_noclaim_apr);

                                                                                                                                                                            var cream_claim_apr = ((((safe2_price * 39.34) / cream_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#cream_claim_apr').html(cream_claim_apr);
                                                                                                                                                                            var cream_noclaim_apr = ((((safe2_price * 13.08) / cream_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#cream_noclaim_apr').html(cream_noclaim_apr);

                                                                                                                                                                            var crv_claim_apr = ((((safe2_price * 39.34) / crv_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#crv_claim_apr').html(crv_claim_apr);
                                                                                                                                                                            var crv_noclaim_apr = ((((safe2_price * 13.08) / crv_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#crv_noclaim_apr').html(crv_noclaim_apr);

                                                                                                                                                                            var harvest_claim_apr = ((((safe2_price * 39.34) / harvest_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#harvest_claim_apr').html(harvest_claim_apr);
                                                                                                                                                                            var harvest_noclaim_apr = ((((safe2_price * 13.08) / harvest_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#harvest_noclaim_apr').html(harvest_noclaim_apr);

                                                                                                                                                                            var pick_claim_apr = ((((safe2_price * 39.34) / pick_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#pick_claim_apr').html(pick_claim_apr);
                                                                                                                                                                            var pick_noclaim_apr = ((((safe2_price * 13.08) / pick_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#pick_noclaim_apr').html(pick_noclaim_apr);

                                                                                                                                                                            var ren_claim_apr = ((((safe2_price * 39.34) / ren_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#ren_claim_apr').html(ren_claim_apr);
                                                                                                                                                                            var ren_noclaim_apr = ((((safe2_price * 13.08) / ren_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#ren_noclaim_apr').html(ren_noclaim_apr);

                                                                                                                                                                            var sushi_claim_apr = ((((safe2_price * 39.34) / sushi_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#sushi_claim_apr').html(sushi_claim_apr);
                                                                                                                                                                            var sushi_noclaim_apr = ((((safe2_price * 13.08) / sushi_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#sushi_noclaim_apr').html(sushi_noclaim_apr);

                                                                                                                                                                            var yearn_claim_apr = ((((safe2_price * 39.34) / yearn_claim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#yearn_claim_apr').html(yearn_claim_apr);
                                                                                                                                                                            var yearn_noclaim_apr = ((((safe2_price * 13.08) / yearn_noclaim_tvl) * 100).toFixed(2) + '%');
                                                                                                                                                                            $('#yearn_noclaim_apr').html(yearn_noclaim_apr);

                                                                                                                                                                            var total_claim_tvl = (aave_claim_tvl +
                                                                                                                                                                                bal_claim_tvl +
                                                                                                                                                                                barn_claim_tvl +
                                                                                                                                                                                cream_claim_tvl +
                                                                                                                                                                                crv_claim_tvl +
                                                                                                                                                                                harvest_claim_tvl +
                                                                                                                                                                                pick_claim_tvl +
                                                                                                                                                                                ren_claim_tvl +
                                                                                                                                                                                sushi_claim_tvl +
                                                                                                                                                                                yearn_claim_tvl)

                                                                                                                                                                            var total_noclaim_tvl = (aave_noclaim_tvl +
                                                                                                                                                                                bal_noclaim_tvl +
                                                                                                                                                                                barn_noclaim_tvl +
                                                                                                                                                                                cream_noclaim_tvl +
                                                                                                                                                                                crv_noclaim_tvl +
                                                                                                                                                                                harvest_noclaim_tvl +
                                                                                                                                                                                pick_noclaim_tvl +
                                                                                                                                                                                ren_noclaim_tvl +
                                                                                                                                                                                sushi_noclaim_tvl +
                                                                                                                                                                                yearn_noclaim_tvl)

                                                                                                                                                                            var total_tvl = total_claim_tvl + total_noclaim_tvl;

                                                                                                                                                                            console.log(total_claim_tvl);
                                                                                                                                                                            console.log(total_noclaim_tvl);
                                                                                                                                                                            console.log(total_tvl);

                                                                                                                                                                            $('#claim_tvl').html(total_claim_tvl.toFixed(0));
                                                                                                                                                                            $('#noclaim_tvl').html(total_noclaim_tvl.toFixed(0));
                                                                                                                                                                            $('#total_tvl').html(total_tvl.toFixed(0));


                                                                                                                                                                        })

                                                                                                                                                                })

                                                                                                                                                        })
                                                                                                                                                })

                                                                                                                                        })
                                                                                                                                })

                                                                                                                        })

                                                                                                                })
                                                                                                        })

                                                                                                })
                                                                                        })
                                                                                })
                                                                        })
                                                                })

                                                        })

                                                })

                                        })
                                })

                        })

                })

        })

})

function commafy(num) {
    var parts = ('' + (num < 0 ? -num : num)).split("."),
        s = parts[0],
        L, i = L = s.length,
        o = '';
    while (i--) {
        o = (i === 0 ? '' : ((L - i) % 3 ? '' : ',')) +
            s.charAt(i) + o
    }
    return (num < 0 ? '-' : '') + o + (parts[1] ? '.' + parts[1] : '');
}