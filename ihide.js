(function() {
    'use strict';
    
    // Добавляем стиль для скрытия элементов и оформления
$('<style>\
    .hidden { display: none !important; }\
    .menu-hide-item .settings-param { \
        padding: 16px 40px !important; /* Увеличенный отступ */ \
        min-height: 54px !important; \
        display: flex !important; \
        align-items: center !important; \
        border-radius: 12px !important; \
        margin-bottom: 12px !important; \
        background: rgba(255,255,255,0.05) !important; \
        transition: all 0.2s ease !important; \
    }\
    .menu-hide-item .settings-param:hover { \
        background: rgba(255,255,255,0.1) !important; \
        transform: translateY(-2px) !important; \
    }\
    .menu-hide-icon { \
        width: 30px !important; \
        height: 30px !important; \
        min-width: 30px !important; \
        min-height: 30px !important; \
        display: flex !important; \
        align-items: center !important; \
        justify-content: center !important; \
        margin-right: 16px !important; \
        margin-left: 10px !important; /* Добавлен отступ слева */ \
    }\
    .menu-hide-text { \
        font-size: 18px !important; \
        flex-grow: 1 !important; \
        font-weight: 500 !important; \
        letter-spacing: 0.3px !important; \
    }\
    .menu-hide-hidden { \
        color: #ff4e45 !important; \
    }\
    .menu-hide-shown { \
        color: #4CAF50 !important; \
    }\
    .section-title .settings-param__name { \
        font-size: 20px !important; \
        font-weight: 600 !important; \
        margin: 25px 0 15px 0 !important; \
        padding-bottom: 8px !important; \
        border-bottom: 2px solid rgba(255,255,255,0.1) !important; \
        color: #fff !important; \
    }\
    .section-divider .settings-param { \
        height: 1px !important; \
        min-height: 1px !important; \
        padding: 0 !important; \
        background: rgba(255,255,255,0.1) !important; \
        margin: 25px 0 !important; \
    }\
    /* Стиль для неактивной кнопки */ \
    .settings-param.disable-hide { \
        opacity: 0.6 !important; \
        pointer-events: none !important; \
    }\
    /* Стиль для благодарности */ \
    .credits-text { \
        text-align: center; \
        color: #b0b0b0 !important; /* Серый цвет с пониженной яркостью */ \
        font-size: 14px !important; \
        padding: 15px 20px 5px !important; \
        margin-top: 5px !important; \
        line-height: 1.5; \
    }\
</style>').appendTo('head');

    // Мультиязыковая поддержка
    Lampa.Lang.add({
        menu_items_hide: {
            ru: 'Скрытие элементов интерфейса',
            en: 'Hide interface',
            uk: 'Приховання інтерфейсу',
            zh: '隐藏界面'
        },
        head_items_hide: {
            ru: 'Скрытие верхних элементов',
            en: 'Hide head items',
            uk: 'Приховати верхнє меню',
            zh: '隐藏顶部菜单'
        },
        settings_items_hide: {
            ru: 'Скрытие правых элементов',
            en: 'Hide settings menu',
            uk: 'Приховати праве меню',
            zh: '隐藏设置菜单'
        },
        left_menu_title: {
            ru: 'Левое меню',
            en: 'Left menu',
            uk: 'Ліве меню',
            zh: '左侧菜单'
        },
        head_title: {
            ru: 'Верхнее меню',
            en: 'Head menu',
            uk: 'Верхнє меню',
            zh: '顶部菜单'
        },
        settings_title: {
            ru: 'Настройки',
            en: 'Settings menu',
            uk: 'Праве меню',
            zh: '设置菜单'
        },
        plugin_description: {
            ru: 'Плагин для сокрытия элементов интерфейса',
            en: 'Plugin for hiding interface elements',
            uk: 'Плагін для приховання елементів інтерфейсу',
            zh: '用于隐藏界面元素的插件'
        },
        hidden: {
            ru: 'Скрыто',
            en: 'Hidden',
            uk: 'Приховано',
            zh: '已隐藏'
        },
        shown: {
            ru: 'Отображено',
            en: 'Shown',
            uk: 'Відображається',
            zh: '显示中'
        },
        no_name: {
            ru: 'Элемент без названия',
            en: 'Unnamed element',
            uk: 'Елемент без назви',
            zh: '未命名元素'
        },
        head_action_search: {
            ru: 'Поиск',
            en: 'Search',
            uk: 'Пошук',
            zh: '搜索'
        },
        head_action_settings: {
            ru: 'Настройки',
            en: 'Settings',
            uk: 'Налаштування',
            zh: '设置'
        },
        head_action_feed: {
            ru: 'Лента',
            en: 'Feed',
            uk: 'Стрічка',
            zh: '动态'
        },
        head_action_notice: {
            ru: 'Уведомления',
            en: 'Notifications',
            uk: 'Сповіщення',
            zh: '通知'
        },
        head_action_profile: {
            ru: 'Профиль',
            en: 'Profile',
            uk: 'Профіль',
            zh: '个人资料'
        },
        head_action_fullscreen: {
            ru: 'Полный экран',
            en: 'Fullscreen',
            uk: 'Повноекранний режим',
            zh: '全屏'
        },
        credits_text: {
            ru: 'Создано при поддержке сообщества Lampac & BWA<br>Отдельная благодарность Oleksandr и Max NuttShell за помощь в разработке плагина',
            en: 'Created with support from Lampac & BWA community<br>Special thanks to Oleksandr and Max NuttShell for plugin development assistance',
            uk: 'Створено за підтримки спільноти Lampac & BWA<br>Окрема подяка Oleksandr та Max NuttShell за допомогу у розробці плагіна',
            zh: '在 Lampac & BWA 社区支持下创建<br>特别感谢 Oleksandr 和 Max NuttShell 对插件开发的帮助'
        },
        reset_all_hidden: {
            ru: 'Показать все',
            en: 'Show all',
            uk: 'Показати все',
            zh: '显示全部'
        }
    });

    // Иконка глаза для настроек
    var eyeIcon = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';

    // Иконка для кнопки "Показать все"
    var resetIcon = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>';

    // Инициализируем плагины
    function startPlugin() {
        var manifest = {
            type: 'other',
            version: '0.7.2',
            name: Lampa.Lang.translate('menu_items_hide'),
            description: Lampa.Lang.translate('plugin_description'),
            component: 'menu_filter',
        };
        Lampa.Manifest.plugins.push(manifest);

        // Функции для скрытия/показа пунктов меню
        function updateMenuVisibility() {
            var hiddenItems = Lampa.Storage.get('menu_hide', []);
            
            $('.menu__item').each(function() {
                var $item = $(this);
                var textElement = $item.find('.menu__text');
                if (textElement.length === 0) return;
                
                var text = textElement.text().trim();
                
                if (hiddenItems.indexOf(text) !== -1) {
                    $item.addClass('hidden');
                } else {
                    $item.removeClass('hidden');
                }
            });
        }
        
        function updateHeadVisibility() {
            var hiddenItems = Lampa.Storage.get('head_hidden_items', []);
            
            $('.head__action').each(function() {
                var $item = $(this);
                // Пропускаем системные элементы
                if ($item.hasClass('processing')) return;
                
                // Генерируем ID на основе классов
                var classes = $item.attr('class').split(' ');
                var idParts = [];
                for (var i = 0; i < classes.length; i++) {
                    if (classes[i].indexOf('open--') === 0 || classes[i] === 'full-screen') {
                        idParts.push(classes[i]);
                    }
                }
                var id = idParts.join('_');
                
                if (!id) return;
                
                if (hiddenItems.indexOf(id) !== -1) {
                    $item.addClass('hidden');
                } else {
                    $item.removeClass('hidden');
                }
            });
        }
        
        function updateSettingsVisibility() {
            var hiddenItems = Lampa.Storage.get('settings_hidden_items', []);
            
            $('.settings-folder').each(function() {
                var $item = $(this);
                var component = $item.data('component');
                if (!component) return;
                
                // Не скрываем настройки нашего плагина
                if (component === 'menu_filter') return;
                
                if (hiddenItems.indexOf(component) !== -1) {
                    $item.addClass('hidden');
                } else {
                    $item.removeClass('hidden');
                }
            });
        }
        
        function updateAllVisibility() {
            updateMenuVisibility();
            updateHeadVisibility();
            updateSettingsVisibility();
        }

        // Функция сброса всех скрытых элементов
        function resetAllHiddenItems() {
            // Очищаем все хранилища скрытых элементов
            Lampa.Storage.set('menu_hide', []);
            Lampa.Storage.set('head_hidden_items', []);
            Lampa.Storage.set('settings_hidden_items', []);
            
            // Обновляем видимость элементов
            updateAllVisibility();
            
            // Обновляем статусы кнопок в текущем экране
            $('.menu-hide-item').each(function() {
                var $item = $(this);
                var $value = $item.find('.settings-param__value');
                if ($value.length) {
                    $value.text(Lampa.Lang.translate('shown'));
                    $value.removeClass('menu-hide-hidden').addClass('menu-hide-shown');
                }
            });
        }

        // Добавляем компонент настроек
        Lampa.SettingsApi.addComponent({
            component: 'menu_filter',
            name: Lampa.Lang.translate('menu_items_hide'),
            description: Lampa.Lang.translate('plugin_description'),
            icon: eyeIcon
        });

        // Главное окно настроек
        Lampa.SettingsApi.addParam({
            component: 'interface',
            param: {
                type: 'button'
            },
            field: {
                name: Lampa.Lang.translate('menu_items_hide'),
                description: Lampa.Lang.translate('plugin_description')
            },
            onChange: function() {
                Lampa.Settings.create('menu_filter', {
                    onBack: function() {
                        Lampa.Settings.create('interface');
                    }
                });
            }
        });
        
        // Кнопка для управления правым меню (Настройки)
        Lampa.SettingsApi.addParam({
            component: 'interface',
            param: {
                type: 'button'
            },
            field: {
                name: Lampa.Lang.translate('settings_items_hide'),
                description: Lampa.Lang.translate('plugin_description')
            },
            onChange: function() {
                Lampa.Settings.create('menu_filter', {
                    onBack: function() {
                        Lampa.Settings.create('interface');
                    }
                });
            }
        });

        // Переменные для отслеживания создания настроек
        var leftSettingsCreated = false;
        var headSettingsCreated = false;
        var settingsSettingsCreated = false;
        var resetButtonAdded = false; // Флаг для кнопки "Показать все"
        
        // Создаем настройки для меню с TV-поддержкой
        function createMenuSettings() {
            // Добавляем благодарность и кнопку сброса только один раз
            if (!resetButtonAdded) {
                // Добавляем благодарность в самом верху
                Lampa.SettingsApi.addParam({
                    component: 'menu_filter',
                    param: {
                        type: 'space'
                    },
                    field: {},
                    onRender: function(item) {
                        var credits = $('<div class="credits-text">' + Lampa.Lang.translate('credits_text') + '</div>');
                        item.append(credits);
                    }
                });

                // Добавляем кнопку "Показать все" в самом верху
                Lampa.SettingsApi.addParam({
                    component: 'menu_filter',
                    param: {
                        type: 'button'
                    },
                    field: {
                        name: resetIcon,
                        description: Lampa.Lang.translate('reset_all_hidden')
                    },
                    onChange: function() {
                        resetAllHiddenItems();
                    },
                    onRender: function(item) {
                        item.addClass('menu-hide-item');
                        item.find('.settings-param__descr').remove();
                        
                        item.find('.settings-param').css({
                            'padding': '0 15px',
                            'display': 'flex',
                            'align-items': 'center',
                            'justify-content': 'space-between'
                        });
                        
                        var $name = item.find('.settings-param__name');
                        $name.css({
                            'padding': '0',
                            'margin': '0',
                            'font-size': '16px',
                            'display': 'flex',
                            'align-items': 'center',
                            'justify-content': 'space-between',
                            'width': '100%'
                        });
                        
                        $name.find('svg').css({
                            'width': '30px',
                            'height': '30px',
                            'min-width': '30px',
                            'min-height': '30px'
                        }).addClass('menu-hide-icon');
                        
                        var $text = $('<span class="menu-hide-text">' + Lampa.Lang.translate('reset_all_hidden') + '</span>');
                        $name.find('svg').after($text);
                        
                        // Добавляем значок сброса справа
                        var $resetIcon = $(resetIcon).css({
                            'width': '20px',
                            'height': '20px',
                            'min-width': '20px',
                            'min-height': '20px',
                            'margin-right': '10px'
                        });
                        
                        $name.append($resetIcon);
                    }
                });
                
                resetButtonAdded = true;
            }
            
            // Защита от дублирования левого меню
            if (!leftSettingsCreated) {
                // Добавляем заголовок для левого меню
                Lampa.SettingsApi.addParam({
                    component: 'menu_filter',
                    param: {
                        type: 'title'
                    },
                    field: {
                        name: Lampa.Lang.translate('left_menu_title'),
                    },
                    onRender: function(item) {
                        item.addClass('section-title');
                    }
                });
                
                // Настройки для левого меню
                var menuHiddenItems = Lampa.Storage.get('menu_hide', []);
                
                $('.menu__item').each(function() {
                    var $item = $(this);
                    var textElement = $item.find('.menu__text');
                    if (textElement.length === 0) return;
                    
                    var text = textElement.text().trim();
                    var iconElement = $item.find('.menu__ico');
                    var icon = iconElement.length ? iconElement.html() : '•';
                    
                    Lampa.SettingsApi.addParam({
                        component: 'menu_filter',
                        param: {
                            type: 'button'
                        },
                        field: {
                            name: icon,
                            description: text
                        },
                        onRender: function(item) {
                            item.addClass('menu-hide-item');
                            
                            // Удаляем описание
                            item.find('.settings-param__descr').remove();
                            
                            // Настройки для контейнера
                            item.css({
                                'padding': '0',
                                'margin': '0'
                            });
                            
                            // Настройки для параметра
                            item.find('.settings-param').css({
                                'padding': '0 15px',
                                'display': 'flex',
                                'align-items': 'center',
                                'justify-content': 'space-between'
                            });
                            
                            // Настройки для имени параметра
                            var $name = item.find('.settings-param__name');
                            $name.css({
                                'padding': '0',
                                'margin': '0',
                                'font-size': '16px',
                                'display': 'flex',
                                'align-items': 'center',
                                'justify-content': 'space-between',
                                'width': '100%'
                            });
                            
                            // Размер иконки
                            $name.find('svg, img').css({
                                'width': '30px',
                                'height': '30px',
                                'min-width': '30px',
                                'min-height': '30px'
                            }).addClass('menu-hide-icon');
                            
                            var isHidden = menuHiddenItems.indexOf(text) !== -1;
                            var status = isHidden ? 
                                Lampa.Lang.translate('hidden') : 
                                Lampa.Lang.translate('shown');
                            
                            // Создаем элемент значения
                            var $value = $('<div class="settings-param__value"/>')
                                .text(status)
                                .addClass(isHidden ? 'menu-hide-hidden' : 'menu-hide-shown')
                                .css({
                                    'font-size': '15px',
                                    'padding-right': '10px'
                                });
                            
                            // Добавляем текст элемента рядом с иконкой
                            var $text = $('<span/>')
                                .text(text)
                                .addClass('menu-hide-text')
                                .css({
                                    'margin-left': '10px',
                                    'flex-grow': '1'
                                });
                            
                            $name.find('svg, img').after($text);
                            $name.append($value);
                            
                            // Функция переключения состояния
                            function toggleItem() {
                                var hiddenItems = Lampa.Storage.get('menu_hide', []);
                                var index = hiddenItems.indexOf(text);
                                
                                if (index !== -1) {
                                    hiddenItems.splice(index, 1);
                                } else {
                                    hiddenItems.push(text);
                                }
                                
                                Lampa.Storage.set('menu_hide', hiddenItems);
                                updateMenuVisibility();
                                
                                var newStatus = hiddenItems.indexOf(text) !== -1 ? 
                                    Lampa.Lang.translate('hidden') : 
                                    Lampa.Lang.translate('shown');
                                
                                var isNowHidden = hiddenItems.indexOf(text) !== -1;
                                $value.text(newStatus)
                                    .toggleClass('menu-hide-hidden', isNowHidden)
                                    .toggleClass('menu-hide-shown', !isNowHidden);
                            }
                            
                            // Универсальный обработчик для всех платформ
                            item.off('hover:enter').on('hover:enter', function() {
                                toggleItem();
                            });
                        }
                    });
                });
                
                leftSettingsCreated = true;
            }
            
            // Добавляем разделитель
            Lampa.SettingsApi.addParam({
                component: 'menu_filter',
                param: {
                    type: 'space'
                },
                field: {},
                onRender: function(item) {
                    item.addClass('section-divider');
                }
            });
            
            // Защита от дублирования верхнего меню
            if (!headSettingsCreated) {
                // Добавляем заголовок для верхнего меню
                Lampa.SettingsApi.addParam({
                    component: 'menu_filter',
                    param: {
                        type: 'title'
                    },
                    field: {
                        name: Lampa.Lang.translate('head_title'),
                    },
                    onRender: function(item) {
                        item.addClass('section-title');
                    }
                });
                
                // Настройки для верхнего меню
                var headHiddenItems = Lampa.Storage.get('head_hidden_items', []);
                var headAddedItems = {};
                
                $('.head__action').each(function() {
                    var $item = $(this);
                    // Пропускаем системные элементы
                    if ($item.hasClass('processing')) return;
                    
                    // Генерируем ID на основе классов
                    var classes = $item.attr('class').split(' ');
                    var idParts = [];
                    for (var i = 0; i < classes.length; i++) {
                        if (classes[i].indexOf('open--') === 0 || classes[i] === 'full-screen') {
                            idParts.push(classes[i]);
                        }
                    }
                    var id = idParts.join('_');
                    
                    if (!id) return;
                    if (headAddedItems[id]) return;
                    headAddedItems[id] = true;
                    
                    // Получаем иконку элемента
                    var icon = '';
                    if ($item.find('svg').length) {
                        icon = $item.html();
                    } else if ($item.find('img').length) {
                        icon = '<img src="' + $item.find('img').attr('src') + '" width="30" height="30" style="display:block;">';
                    } else {
                        icon = '•';
                    }
                    
                    // Определяем название элемента по классам
                    var titleKey = '';
                    if (id.includes('open--search')) {
                        titleKey = 'head_action_search';
                    } else if (id.includes('open--settings')) {
                        titleKey = 'head_action_settings';
                    } else if (id.includes('open--feed')) {
                        titleKey = 'head_action_feed';
                    } else if (id.includes('open--notice')) {
                        titleKey = 'head_action_notice';
                    } else if (id.includes('open--profile')) {
                        titleKey = 'head_action_profile';
                    } else if (id.includes('full-screen')) {
                        titleKey = 'head_action_fullscreen';
                    } else {
                        titleKey = 'no_name';
                    }
                    
                    var title = Lampa.Lang.translate(titleKey);
                    
                    Lampa.SettingsApi.addParam({
                        component: 'menu_filter',
                        param: {
                            type: 'button'
                        },
                        field: {
                            name: icon,
                            description: title
                        },
                        onRender: function(item) {
                            item.addClass('menu-hide-item');
                            
                            // Удаляем описание
                            item.find('.settings-param__descr').remove();
                            
                            // Настройки для контейнера
                            item.css({
                                'padding': '0',
                                'margin': '0'
                            });
                            
                            // Настройки для параметра
                            item.find('.settings-param').css({
                                'padding': '0 15px',
                                'display': 'flex',
                                'align-items': 'center',
                                'justify-content': 'space-between'
                            });
                            
                            // Делаем кнопку "Настройки" неактивной
                            if (id.includes('open--settings')) {
                                item.find('.settings-param').addClass('disable-hide');
                            }
                            
                            // Настройки для имени параметра
                            var $name = item.find('.settings-param__name');
                            $name.css({
                                'padding': '0',
                                'margin': '0',
                                'font-size': '16px',
                                'display': 'flex',
                                'align-items': 'center',
                                'justify-content': 'space-between',
                                'width': '100%'
                            });
                            
                            // Размер иконки
                            $name.find('svg, img').css({
                                'width': '30px',
                                'height': '30px',
                                'min-width': '30px',
                                'min-height': '30px'
                            }).addClass('menu-hide-icon');
                            
                            var isHidden = headHiddenItems.indexOf(id) !== -1;
                            var status = isHidden ? 
                                Lampa.Lang.translate('hidden') : 
                                Lampa.Lang.translate('shown');
                            
                            // Создаем элемент значения
                            var $value = $('<div class="settings-param__value"/>')
                                .text(status)
                                .addClass(isHidden ? 'menu-hide-hidden' : 'menu-hide-shown')
                                .css({
                                    'font-size': '15px',
                                    'padding-right': '10px'
                                });
                            
                            // Добавляем текст элемента рядом с иконкой
                            var $text = $('<span/>')
                                .text(title)
                                .addClass('menu-hide-text')
                                .css({
                                    'margin-left': '10px',
                                    'flex-grow': '1'
                                });
                            
                            $name.find('svg, img').after($text);
                            $name.append($value);
                            
                            // Функция переключения состояния
                            function toggleItem() {
                                // Не позволяем скрыть настройки
                                if (id.includes('open--settings')) return;
                                
                                var hiddenItems = Lampa.Storage.get('head_hidden_items', []);
                                var index = hiddenItems.indexOf(id);
                                
                                if (index !== -1) {
                                    hiddenItems.splice(index, 1);
                                } else {
                                    hiddenItems.push(id);
                                }
                                
                                Lampa.Storage.set('head_hidden_items', hiddenItems);
                                updateHeadVisibility();
                                
                                var newStatus = hiddenItems.indexOf(id) !== -1 ? 
                                    Lampa.Lang.translate('hidden') : 
                                    Lampa.Lang.translate('shown');
                                
                                var isNowHidden = hiddenItems.indexOf(id) !== -1;
                                $value.text(newStatus)
                                    .toggleClass('menu-hide-hidden', isNowHidden)
                                    .toggleClass('menu-hide-shown', !isNowHidden);
                            }
                            
                            // Универсальный обработчик для всех платформ
                            item.off('hover:enter').on('hover:enter', function() {
                                toggleItem();
                            });
                        }
                    });
                });
                
                headSettingsCreated = true;
            }
            
            // Добавляем разделитель
            Lampa.SettingsApi.addParam({
                component: 'menu_filter',
                param: {
                    type: 'space'
                },
                field: {},
                onRender: function(item) {
                    item.addClass('section-divider');
                }
            });
            
            // Защита от дублирования правого меню
            if (!settingsSettingsCreated) {
                // Добавляем заголовок для правого меню (Настройки)
                Lampa.SettingsApi.addParam({
                    component: 'menu_filter',
                    param: {
                        type: 'title'
                    },
                    field: {
                        name: Lampa.Lang.translate('settings_title'),
                    },
                    onRender: function(item) {
                        item.addClass('section-title');
                    }
                });
                
                // Настройки для правого меню (Настройки)
                var settingsHiddenItems = Lampa.Storage.get('settings_hidden_items', []);
                var settingsAddedItems = {};
                
                function processSettingsMenu() {
                    var folders = $('.settings-folder');
                    if (folders.length === 0) {
                        setTimeout(processSettingsMenu, 300);
                        return;
                    }
                    
                    folders.each(function() {
                        var $item = $(this);
                        var component = $item.data('component');
                        if (!component) return;
                        if (settingsAddedItems[component]) return;
                        settingsAddedItems[component] = true;
                        
                        var nameElement = $item.find('.settings-folder__name');
                        var name = nameElement.length ? nameElement.text().trim() : '';
                        var iconElement = $item.find('.settings-folder__icon');
                        var icon = iconElement.length ? iconElement.html() : '•';
                        
                        if (!name) {
                            name = Lampa.Lang.translate('no_name');
                        }
                        
                        Lampa.SettingsApi.addParam({
                            component: 'menu_filter',
                            param: {
                                type: 'button'
                            },
                            field: {
                                name: icon,
                                description: name
                            },
                            onRender: function(item) {
                                item.addClass('menu-hide-item');
                                
                                // Удаляем описание
                                item.find('.settings-param__descr').remove();
                                
                                // Настройки для контейнера
                                item.css({
                                    'padding': '0',
                                    'margin': '0'
                                });
                                
                                // Настройки для параметра
                                item.find('.settings-param').css({
                                    'padding': '0 15px',
                                    'display': 'flex',
                                    'align-items': 'center',
                                    'justify-content': 'space-between'
                                });
                                
                                // Делаем кнопку "Скрытие элементов интерфейса" неактивной
                                if (component === 'menu_filter') {
                                    item.find('.settings-param').addClass('disable-hide');
                                }
                                
                                // Настройки для имени параметра
                                var $name = item.find('.settings-param__name');
                                $name.css({
                                    'padding': '0',
                                    'margin': '0',
                                    'font-size': '16px',
                                    'display': 'flex',
                                    'align-items': 'center',
                                    'justify-content': 'space-between',
                                    'width': '100%'
                                });
                                
                                // Размер иконки
                                $name.find('svg, img').css({
                                    'width': '26px',
                                    'height': '26px',
                                    'min-width': '26px',
                                    'min-height': '26px'
                                }).addClass('menu-hide-icon');
                                
                                var isHidden = settingsHiddenItems.indexOf(component) !== -1;
                                var status = isHidden ? 
                                    Lampa.Lang.translate('hidden') : 
                                    Lampa.Lang.translate('shown');
                                
                                // Создаем элемент значения
                                var $value = $('<div class="settings-param__value"/>')
                                    .text(status)
                                    .addClass(isHidden ? 'menu-hide-hidden' : 'menu-hide-shown')
                                    .css({
                                        'font-size': '15px',
                                        'padding-right': '10px'
                                    });
                                
                                // Добавляем текст элемента рядом с иконкой
                                var $text = $('<span/>')
                                    .text(name)
                                    .addClass('menu-hide-text')
                                    .css({
                                        'margin-left': '10px',
                                        'flex-grow': '1'
                                    });
                                
                                $name.find('svg, img').after($text);
                                $name.append($value);
                                
                                // Функция переключения состояния
                                function toggleItem() {
                                    // Не позволяем скрыть настройки плагина
                                    if (component === 'menu_filter') return;
                                    
                                    var hiddenItems = Lampa.Storage.get('settings_hidden_items', []);
                                    var index = hiddenItems.indexOf(component);
                                    
                                    if (index !== -1) {
                                        hiddenItems.splice(index, 1);
                                    } else {
                                        hiddenItems.push(component);
                                    }
                                    
                                    Lampa.Storage.set('settings_hidden_items', hiddenItems);
                                    updateSettingsVisibility();
                                    
                                    var newStatus = hiddenItems.indexOf(component) !== -1 ? 
                                        Lampa.Lang.translate('hidden') : 
                                        Lampa.Lang.translate('shown');
                                    
                                    var isNowHidden = hiddenItems.indexOf(component) !== -1;
                                    $value.text(newStatus)
                                        .toggleClass('menu-hide-hidden', isNowHidden)
                                        .toggleClass('menu-hide-shown', !isNowHidden);
                                }
                                
                                // Универсальный обработчик для всех платформ
                                item.off('hover:enter').on('hover:enter', function() {
                                    toggleItem();
                                });
                            }
                        });
                    });
                }
                
                // Запускаем обработку
                processSettingsMenu();
                
                settingsSettingsCreated = true;
            }
        }

        // Обработчик для обновления меню
        function handleMenuChanges() {
            // Применяем настройки при загрузке
            updateAllVisibility();
            
            // Обновляем при изменении хранилища
            Lampa.Storage.listener.follow('change', function(e) {
                if (e.name === 'menu_hide' || 
                    e.name === 'head_hidden_items' || 
                    e.name === 'settings_hidden_items') {
                    updateAllVisibility();
                }
            });
            
            // Обновляем при изменении DOM
            var observer = new MutationObserver(function() {
                if ($('.menu__list, .head__actions, .settings__body').length) {
                    createMenuSettings();
                    updateAllVisibility();
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        // Запускаем при загрузке
        function initPlugin() {
            // Ждем пока появится меню
            var waitForMenu = setInterval(function() {
                if ($('.menu__list, .head__actions, .settings__body').length) {
                    clearInterval(waitForMenu);
                    createMenuSettings();
                    handleMenuChanges();
                }
            }, 500);
        }

        // Подключение плагина
        if (window.appready) {
            initPlugin();
        } else {
            Lampa.Listener.follow('app', function(e) {
                if (e.type === 'ready') {
                    initPlugin();
                }
            });
        }
    }

    // Подключение плагина
    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') {
                startPlugin();
            }
        });
    }
})();
