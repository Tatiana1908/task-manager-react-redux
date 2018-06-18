import { connect } from 'react-redux'

import Modal from '../../components/add-new-task-modal'
import { addNewTask } from '../../store/actions'

// const mapStateToProps = state => {
//     return {
//         tasksList: state.tasks,
//     }
// }

const mapDispatchToProps = {
    addNewTask
}

export default connect(null, mapDispatchToProps)(Modal)