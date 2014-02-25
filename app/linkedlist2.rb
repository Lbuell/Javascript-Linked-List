class Node
  attr_accessor :value, :latter, :former

  def initialize(value, latter, former)
    @value = value
    @latter = latter
    @former = former
  end

end

class List
  attr_reader :head
  def initialize
    @tail = nil
    @head = nil
  end

  def delete(node)
    if node == @head
      @head = node.latter
    end
    node.former.latter = node.latter unless node.former.nil?
    node.latter.former = node.former unless node.latter.nil?
  end

  def add(value)
    new_node = Node.new(value, nil, @tail)
    @head = new_node if head.nil?
    @tail.latter = new_node unless @tail.nil?
    @tail = new_node
  end

  def count
    total = 0
    node = @head
    while !node.nil?
      puts node.value
      node = node.latter
      total += 1
    end
    puts "Total: #{total}"
  end

  def remove_duplicates
    current_node = head

    while(!current_node.nil?) do
      value = current_node.value
      next_node = current_node.latter
      current_check_node = current_node.latter

      while(!current_check_node.nil?) do
        if value == current_check_node.value
          delete(current_node)
          break
        end
        current_check_node = current_check_node.latter
      end

      current_node = next_node
    end
  end
end

@list = List.new
200.times do |i|
  @list.add(rand(100))
end

@list.count
@list.remove_duplicates
@list.count

