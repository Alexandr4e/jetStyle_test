$(document).ready(function() {

	(function() {
		var $name = $('#first-name'),
			$lastName = $('#last-name'),
			$phone = $('#phone'),

			$list = $('#list'),
			$listItem = $('#list-item-for-clone'),
			$addButton = $('#add-button');

		// Добавляем контакт в таблицу
		$addButton.click(function(){

			var $clone = $listItem.clone(),
				$itemIcon = $clone.find('.js-list-icon'),
				$itemName = $clone.find('.js-list-first-name'),
				$itemLastName = $clone.find('.js-list-last-name'),
				$itemPhone = $clone.find('.js-list-phone'),
				newName = $name.val(),
				newLastName = $lastName.val(),
				newPhone = $phone.val(),
				letterA = newName.charAt(0),
				letterB = newLastName.charAt(0);


			$('.js-input').removeClass('form__input_error');

			// Проверка на незаполненые поля
			if ($name.val() === '' || $lastName.val() === '' || $phone.val() === '' ) {

				if ($name.val() === '') {
					$name.addClass('form__input_error');
				}

				if ($lastName.val() === '') {
					$lastName.addClass('form__input_error');
				}

				if ($phone.val() === '') {
					$phone.addClass('form__input_error');
				}

				return false;
			}

			// Заполнение контакта
			$itemIcon.text(letterA + letterB);
			$itemName.text(newName);
			$itemLastName.text(newLastName);
			$itemPhone.text(newPhone).attr('href', 'tel:' + newPhone + '');

			// Добавление готового контакта
			$clone.appendTo($list).show();
			$clone.removeAttr('id');
			$clone.css('display', 'flex');

			// Очищаем поля input
			$name.val('');
			$lastName.val('');
			$phone.val('');

			return false;
		});

		// Удаляем контакт
		$(document).on('click', '.js-delete', function() {
			var $t = $(this),
				$item = $t.closest('.js-list-item');

			$item.remove();
		});

	})();
});
