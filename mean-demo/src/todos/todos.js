import _ from 'lodash';

export default function($scope, todoFactory) {
    let params = {
        createHasInput: false
    };

    todoFactory.getTasks($scope);

    const {onCompletedClick, onEditClick, onCancelClick, 
    	   createTask, updateTask, deleteTask, watchCreateTaskInput}
    	   = todoFactory;
    $scope.onCompletedClick = _.partial(todoFactory.onCompletedClick);
    $scope.onEditClick = _.partial(todoFactory.onEditClick);
    $scope.onCancelClick = _.partial(todoFactory.onCancelClick);
    $scope.createTask = _.partial(createTask, $scope, params);
    $scope.updateTask = _.partial(updateTask, $scope);
    $scope.deleteTask = _.partial(deleteTask, $scope);
    $scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));
}
