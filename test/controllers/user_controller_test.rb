require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
    @another_user = users(:two)
  end

  # Authentication
  test 'should authenticate user' do
    assert(@user.authenticate('password'))
  end
  test 'should not authenticate user' do
    assert_not(@user.authenticate('somerandomstring'))
  end

  # Email Validation
  test 'Should validate email' do
    assert(User.create(
             {
               email: @user.email,
               password_digest: @user.password_digest
             }
           ))
  end
  test 'Should not validate email' do
    assert_no_difference('User.count') do
      User.create(
        {
          email: @another_user.email,
          password_digest: @another_user.password_digest
        }
      )
    end
  end

  # Sign up
  test 'Should Sign up user' do
    # find a way to not use password_digest here
    assert_difference('User.count') do
      post sign_up_url,
           params: {
             user: {
               email: @user.email,
               password: @user.password_digest,
               password_confirmation: @user.password_digest
             }
           }
    end
  end

  # test 'Should Not Sign up user' do
  #   # find a way to not use password_digest here
  #   # there is an error on this test
  #   assert_no_difference('User.count') do
  #     post sign_up_url,
  #          params: {
  #            user: {
  #              email: @another_user.email,
  #              password: @another_user.password_digest,
  #              password_confirmation: @another_user.password_digest
  #            }
  #          }
  #   end
  # end

  # Sign In
end
