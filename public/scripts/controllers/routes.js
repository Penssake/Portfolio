'use strict';

page('/', aboutController.index);
page('/about', aboutController.index);
page('/portfolio', portfolioController.index);
page('/blog', blogController.index);
page('/contact', contactController.index);

page();
