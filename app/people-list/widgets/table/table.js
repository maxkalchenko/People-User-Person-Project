angular.module('peopleList')
	.component('tableWidget', {
    	templateUrl: 'people-list/widgets/table/template.html',
      bindings: {
				people: '<',
        personInfo: '='
			},
			controller: [function() {
        var self = angular.extend(this, {
          getPerson: getPerson
        });

        function getPerson(personInfo) {
          self.personInfo = personInfo;
        }
    	}
    ]
  });
