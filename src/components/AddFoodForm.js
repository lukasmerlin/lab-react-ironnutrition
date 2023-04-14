import {Button, Input, Form} from 'antd';

function AddFoodForm(props) {
    
      const [form] = Form.useForm();
    
      const onFinish = (values) => {
        props.addFood(values);
        form.resetFields();
      };
    
      return (
        <Form form={form} onFinish={onFinish} className='foodform'>
            <Form.Item label="Name" name="name">
            <Input />
            </Form.Item>
            <Form.Item label="Calories" name="calories">
            <Input />
            </Form.Item>
            <Form.Item label="Image" name="image">
            <Input />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
      );
}

export default AddFoodForm;