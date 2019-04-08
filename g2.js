var MoneyConverter = require('money-converter');
 money = new MoneyConverter('USD', ['CAD', 'GBP', 'EUR', 'USD'])
 money.convert(1000, {from: 'USD', to: 'EUR'});
